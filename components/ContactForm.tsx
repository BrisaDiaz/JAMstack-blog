import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import Loader from "./Loader";
import { useForm } from "react-hook-form";
export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponceMessage] = useState("");
  const form: React.RefObject<HTMLFormElement> = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const sendEmail = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "service_chsvvvf",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "template_skkibd5",
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID || "MkriWeRvhByDyrHWD",
      )
      .then(
        (result) => {
          setIsLoading(false);
          setResponceMessage(
            "Thank you for getting in touch! We appreciate you for contacting us, someone of our team will contact you soon, have a great day!",
          );
        },
        (error) => {
          setIsLoading(false);
          setResponceMessage(
            "Sorry, Your message couldn't be sended.It seems an error has occurred on the server, please retry again or try later.",
          );
        },
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="form">
      <label htmlFor="subject">Subject*</label>
      <input
        id="subject"
        type="text"
        className="form-input "
        aria-describedby="subject-error"
        aria-required={true}
        aria-invalid={errors["subject"] ? true : false}
        {...register("subject", {
          minLength: {
            value: 3,
            message: "The subject most be at least 3  characters long",
          },
          maxLength: {
            value: 150,
            message: "The subject most not exceed the 150 characters",
          },
          required: "Field is required",
        })}
      />
      {errors["subject"] && (
        <small className="input__error" role="alert" id="subject-error">
          {errors["subject"].message}
        </small>
      )}
      <div className="form__double-input ">
        <div className="input-wrap ">
          <label htmlFor="name">Name*</label>

          <input
            id="name"
            type="text"
            aria-describedby="name-error"
            aria-required={true}
            aria-invalid={errors["user_name"] ? true : false}
            {...register("user_name", {
              minLength: {
                value: 5,
                message: "The name most be at least 5 characters long",
              },
              maxLength: {
                value: 60,
                message: "The name most not exceed the 60 characters",
              },
              required: "Field is required",
            })}
            className="form-input "
          />
          {errors["user_name"] && (
            <small className="input__error" role="alert" id="name-error">
              {errors["user_name"].message}
            </small>
          )}
        </div>
        <div className="input-wrap ">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            aria-describedby="email-error"
            aria-required={true}
            aria-invalid={errors["email"] ? true : false}
            {...register("user_email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please insert a valid email",
              },
              required: "Field is required",
            })}
            className="form-input "
          />
          {errors["user_email"] && (
            <small className="input__error" role="alert" id="email-error">
              {errors["user_email"].message}
            </small>
          )}
        </div>
      </div>

      <label htmlFor="message">Message*</label>
      <textarea
        id="message"
        aria-describedby="message-error"
        aria-required={true}
        aria-invalid={errors["message"] ? true : false}
        {...register("message", {
          minLength: {
            value: 10,
            message: "The message most be at least 10 characters long",
          },
          maxLength: {
            value: 400,
            message: "The message most not exceed the 400 characters",
          },
          required: "Field is required",
        })}
        className="form-input 
       "
        rows={6}
      />
      {errors["message"] && (
        <small className="input__error" role="alert" id="message-error">
          {errors["message"].message}
        </small>
      )}

      {responseMessage && <p>{responseMessage}</p>}
      {!isLoading && !responseMessage && <Button text="Send" />}
      {isLoading && <Loader />}

      <style jsx>
        {`
          .form,
          .input-wrap {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: var(--padding-sm);
            min-width: 300px;
            flex: 1;
          }
          .form__double-input {
            display: flex;
            gap: var(--padding-sm);
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
          }
          .form-input {
            padding: var(--padding-sm);
            border-radius: var(--border-radius);
            border: 1px solid var(--gray);
            resize: vertical;
            font-family: inherit;
          }
          .input__error {
            font-size: 12px;
            color: var(--primary-dark);
          }
        `}
      </style>
    </form>
  );
}
