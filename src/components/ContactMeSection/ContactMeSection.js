import React, {useEffect, useRef} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "../FullScreenSection";
import useSubmit from "../../hooks/useSubmit";
import {useAlertContext} from "../../context/alertContext";
import emailjs from '@emailjs/browser';
import config from "../config";
import "./ContactMeSection.css"

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(config.SERVICE_KEY, config.TEMPLATE_KEY, form.current, {
        publicKey: config.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit('', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string().min(5, "Must be at least 5 characters").required("Required"),
    }),
  });

  useEffect(() => {
    if (response?.type === 'success') {
        onOpen(response.type, response.message);
        formik.resetForm();
        sendEmail();
      } else if (response?.type === 'error') {
        onOpen(response.type, response.message);
      }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#07182E"
      spacing={8}
      width="100%"
    >
      <Box width="100%" id="contactme-section">
        <Heading as="h1">
          Contact me
        </Heading>
        <Box width="100%" maxWidth="800px" p={6} rounded="md" >
          <form ref={form} onSubmit={formik.handleSubmit}>
            <Box >
              <FormControl py={2} isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Your Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage className="error">{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl py={2} isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Your Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage className="error">{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl py={2} isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage className="error">{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                my={5}
                type="submit"
                width="full"
                isLoading={isLoading}
                className="custom-link"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
