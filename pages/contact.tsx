import Head from "next/head";
import type { GetStaticProps } from "next";
import styled from "styled-components";
import { toast } from "react-toastify";

import locale from "locale";
import config from "config";

import Button from "components/common/Button";
import Input from "components/common/Input";
import Label from "components/common/Label";
import TextArea from "components/common/TextArea";
import useForm from "hooks/common/useForm";

const Wrapper = styled.div`
  padding: 50px var(--padding-h);

  @media screen and (min-width: ${config.viewport.md}) {
    padding: 100px 0;
    width: 550px;
    margin: auto;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: var(--text);
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export default ({ pageTitle }: { pageTitle: string }) => {
  const { form, setForm } = useForm({
    email: "",
    subject: "",
    message: "",
    emailErr: false,
  });

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSendMessage = (e: React.MouseEvent) => {
    e.preventDefault();

    let validForm = true;

    // form validation
    if (validateEmail(form.email)) {
      setForm({ emailErr: false });
    } else {
      validForm = false;
      setForm({ emailErr: true });
    }

    if (!validForm) return;

    // Send message
    const requestBody = {
      chat_id: 238013249,
      message: form,
    };
    console.log(requestBody);
    fetch(
      "https://asia-southeast1-personal-360206.cloudfunctions.net/personal-telebot",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    ).then((res) => {
      console.log("Request complete! response:", res);
    });

    // clear form and add toast
    toast.success("Sent!", { toastId: "contact" }); //Show toast
    document.getElementsByTagName("form")[0].reset();
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Wrapper>
        <Title>{locale.en.contact.title}</Title>
        <Subtitle>{locale.en.contact.subtitle}</Subtitle>

        <Form>
          <Label
            text={locale.en.contact.form.email}
            error={
              form.emailErr
                ? locale.en.contact.form.errMessage.email
                : undefined
            }
          >
            <Input
              required
              placeholder={locale.en.contact.form.placeholder.email}
              value={form.email}
              onChange={(e) => setForm({ email: e.target.value })}
              error={!!form.emailErr}
            />
          </Label>

          <Label text={locale.en.contact.form.subject}>
            <Input
              required
              placeholder={locale.en.contact.form.placeholder.subject}
              value={form.subject}
              onChange={(e) => setForm({ subject: e.target.value })}
            />
          </Label>

          <Label text={locale.en.contact.form.message}>
            <TextArea
              required
              value={form.message}
              onChange={(e) => setForm({ message: e.target.value })}
            />
          </Label>

          <Button onClick={handleSendMessage} type="submit">
            {locale.en.contact.form.button}
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageTitle: config.pageTitle.contact,
    },
  };
};
