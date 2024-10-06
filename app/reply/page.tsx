"use client";
import { useRouter } from "next/navigation";
const Button = dynamic(() => import("../components/Button"), { ssr: false });
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import NavbarC from "../components/NavbarC";
import { useState } from "react";
import Alert from "../alert";

type formData = {
  name: string;
  email: string;
  website: string;
  check: boolean;
};

const page = () => {
  const [value, setValue] = useState<formData>({
    name: "",
    email: "",
    website: "",
    check: false,
  });
  const [comment, setComment] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment((prev) => e.target.value);
  };

  const clickHandler = () => {
    const form = document.getElementById("form") as HTMLFormElement;
    form?.requestSubmit();

    // router.replace("/blog");
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue({
      name: "",
      email: "",
      website: "",
      check: false,
    });
    setShowAlert(true);
    setComment("");
  };

  return (
    <div className="text-[#3A3A3A]">
      <NavbarC heading="Specializing In Timely Deliveries   " page="reply" />
      <div className="flex justify-center max-w-[65%] place-content-start  mx-auto items-center flex-col my-12 text-lg gap-4">
        <h1 className="text-start text-4xl font-bold self-start">
          Leave A Reply
        </h1>
        <p className="self-start">
          Your email address will not be published. Required fields are marked *
        </p>
        <form
          id="form"
          onSubmit={submitHandler}
          className="self-start flex flex-col text-start items-start justify-center w-full mx-2 tracking-tighter"
        >
          <label className="self-start">Comment *</label>
          <textarea
            rows={8}
            required
            value={comment}
            name="comment"
            onChange={handleComment}
            className="py-3 rounded-md px-6 w-full border-[1px] border-black mb-4"
          />
          <label className="self-start">Name *</label>
          <input
            type="text"
            required
            value={value.name}
            name="name"
            onChange={handleChange}
            placeholder="Your Name"
            className="py-2 rounded-sm px-3 w-full border-[1px] border-black mb-4"
          />
          <label className="self-start">Email *</label>
          <input
            // required
            type="email"
            value={value.email}
            name="email"
            onChange={handleChange}
            placeholder="Your Email"
            className="py-2 rounded-sm px-3 w-full border-[1px] border-black mb-4"
          />
          <label className="self-start">Website *</label>
          <input
            type="url"
            // required
            value={value.website}
            name="website"
            onChange={handleChange}
            placeholder="Your Url"
            className="py-2 rounded-sm px-3 w-full border-[1px] border-black mb-4"
          />
          <span className="cursor-pointer">
            <input
              type="checkbox"
              checked={value.check}
              name="check"
              onChange={handleChange}
              placeholder="Your Url"
              className="rounded-sm cursor-pointer border-[1px] mb-6 mr-2"
            />
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
          <span className="p-8">
            {showAlert && (
              <Alert
                type="success"
                message="Comment Successfull &#128515;"
                onClose={() => setShowAlert(false)}
              />
            )}
          </span>
          <Button type="submit" value="Post Comment" click={clickHandler} />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default page;
