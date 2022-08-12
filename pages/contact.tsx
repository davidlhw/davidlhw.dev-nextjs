import Head from "next/head";
import type { GetStaticProps } from "next";
import styled from "styled-components";

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
  gap: 25px;
`;

export default ({ pageTitle }: { pageTitle: string }) => {
  const { form, setForm } = useForm({
    email: "",
    subject: "",
    message: "",
  });

  const handleSendMessage = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(form);
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
          <Label text={locale.en.contact.form.email}>
            <Input
              placeholder={locale.en.contact.form.placeholder.email}
              value={form.email}
              onChange={(e) => setForm({ email: e.target.value })}
            />
          </Label>

          <Label text={locale.en.contact.form.subject}>
            <Input
              placeholder={locale.en.contact.form.placeholder.subject}
              value={form.subject}
              onChange={(e) => setForm({ subject: e.target.value })}
            />
          </Label>

          <Label text={locale.en.contact.form.message}>
            <TextArea
              value={form.message}
              onChange={(e) => setForm({ message: e.target.value })}
            />
          </Label>

          <Button onClick={handleSendMessage}>
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
