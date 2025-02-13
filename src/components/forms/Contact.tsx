"use client";

import { Button, Divider, Input, Textarea } from "@heroui/react";

const Contact = () => {
  return (
    <div className="lg:col-span-2 rounded-xl lg:rounded-2xl p-4 sm:p-6 bg-white dark:bg-zinc-900 backdrop-blur-2xl mx-auto w-full lg:w-[600px] lg:shadow-lg">
      <div>
        <h2>Punya Pertanyaan?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          perspiciatis.
        </p>
      </div>

      <Divider className="my-6" />

      <form>
        <div className="flex flex-col gap-4 my-6">
          <Input
            label="Subject"
            placeholder="Masukan Subject Anda"
            type="text"
            labelPlacement="outside"
          />
          <Input
            label="Email"
            placeholder="Masukan Email Anda"
            type="email"
            labelPlacement="outside"
          />
          <Textarea label="Alamat" placeholder="Hello, Saya ingin bertanya" labelPlacement="outside" />
        </div>
        <Button fullWidth color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
