import { Button } from "@/components/Elements";

export const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl text-center space-x-6 mt-12">
        <h1 className="text-5xl font-black tracking-wide mb-5 uppercase font-mono">Organize your Projects</h1>
        <p className="">React Structure Project is a powerful tool for organizing your React projects with ease. This open-source project provides a robust and scalable structure that enables developers to build and maintain complex React applications with confidence. With React Structure Project, you can streamline your development process, reduce errors, and improve your code quality. Whether you're building a small React application or a large-scale project, React Structure Project has got you covered. Try it out today and experience the benefits of a well-structured React project.</p>
      </div>
      <div className="grid grid-cols-2 mt-12 gap-x-3">
        <Button size="lg">Document</Button>
        <Button size="lg" variant="contrast">Profile</Button>
      </div>
    </div>
  );
}