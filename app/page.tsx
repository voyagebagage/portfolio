// app/page.tsx
// "use client";

import MyButton from "./components/MyButton";

export default function Home() {
  return (
    <div>
      <MyButton>coucou</MyButton>
      <MyButton colorScheme="red" variant="solid">
        Button
      </MyButton>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* <Link
        href="/about"
        // as={<Button />}
        bg="whiteAlpha.500"
        color="blue.400"
        _hover={{ color: "blue.500" }}
      >
        About
      </Link>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button> */}
      {/* <Button>Button</Button> */}
    </div>
  );
}
