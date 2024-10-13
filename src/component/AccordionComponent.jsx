import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AOS from "aos";
import "aos/dist/aos.css";

const AccordionComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between align-center lg:gap-5">
      <div className="lg:w-6/12 md:w-6/12">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="accordion-div"
            data-aos="fade-right"
          >
            <AccordionTrigger className="accordion">
              How can I contact you for work{" "}
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              I'd love to hear from you! You can reach me through the Contact
              page on my portfolio or send me an email at{" "}
              <a
                href="mailto:emmanuelpromise456@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b className="underline">emmanuelpromise456@gmail.com</b>
              </a>
              . Feel free to connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/devpromise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b className="underline">LinkedIn</b>
              </a>{" "}
              as well.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="accordion-div"
            data-aos="fade-right"
          >
            <AccordionTrigger className="accordion">
              What is your development process?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              My development process starts with understanding the problem and
              then mapping out the best solution. I focus on planning, writing
              clean code, and testing everything along the way. I also keep
              communication open with clients to make sure the project stays on
              track and meets their needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="accordion-div"
            data-aos="fade-right"
          >
            <AccordionTrigger className="accordion">
              Do you offer freelance services?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              Yes, I do! I am available for freelance projects ranging from
              small website updates to full-scale web application development.
              If you have a project in mind, please reach out to me via the
              Contact page to discuss your requirements and how I can assist
              you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="accordion-div"
            data-aos="fade-right"
          >
            <AccordionTrigger className="accordion">
              What inspired you to become a developer?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              I've always been fascinated by technology and how it can solve
              real-world problems. The ability to create something from scratch,
              see it come to life, and make a positive impact on users inspired
              me to pursue a career in development. Continuous learning and the
              ever-evolving nature of the tech industry keep me motivated and
              excited about what lies ahead.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="lg:w-6/12 md:w-6/12">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="accordion-div"
            data-aos="fade-left"
          >
            <AccordionTrigger className="accordion">
              How do you stay updated with the latest technologies?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              I stay updated by regularly reading tech blogs, following industry
              leaders on social media, and experimenting with new tools and
              frameworks. I also take part in online courses, attend webinars,
              and collaborate with other developers to keep my skills sharp and
              relevant.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="accordion-div"
            data-aos="fade-left"
          >
            <AccordionTrigger className="accordion">
              Can you work remotely?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              Yes, I am open to remote work opportunities. With the right
              communication tools and project management practices, I can
              effectively collaborate with teams and clients from anywhere in
              the world.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="accordion-div"
            data-aos="fade-left"
          >
            <AccordionTrigger className="accordion">
              What are your future goals?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              My future goals are to continue growing as a web developer,
              staying on top of new technologies, and taking on more complex and
              impactful projects. Ultimately, I want to build solutions that
              make people's lives easier and more enjoyable, while expanding my
              skills into areas like AI and blockchain.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="accordion-div"
            data-aos="fade-left"
          >
            <AccordionTrigger className="accordion">
              How do you handle project deadlines?
            </AccordionTrigger>
            <AccordionContent className="accordion-content">
              I approach deadlines with careful planning and time management. I
              prioritize tasks, set milestones, and communicate regularly with
              clients or team members to ensure that projects are completed on
              time while maintaining high-quality standards.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionComponent;
