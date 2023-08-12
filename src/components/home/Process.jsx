// Import Styled Components:
import Section from "../ui/Section";
import Container from "../ui/Container";
import { Title, SubTitle } from "../ui/Titles";

// Import Icons:
import { Arrow } from "../icons";
import { getIconComponentByName } from "@/utils/icons-map";

const processSteps = [
  {
    icon: "step_1",
    name: "01 analyzing",
    details: "We've spent many years in the healthcare industry.",
  },
  {
    icon: "step_2",
    name: "02 designing",
    details: "We've spent many years in the healthcare industry.",
  },
  {
    icon: "step_3",
    name: "03 cooding",
    details: "We've spent many years in the healthcare industry.",
  },
  {
    icon: "step_4",
    name: "04 testing",
    details: "We've spent many years in the healthcare industry.",
  },
  {
    icon: "step_5",
    name: "05 implementation",
    details: "We've spent many years in the healthcare industry.",
  }
];

const Proccess = () => {
  return (
    <Section variant="xl" className="sm:px-6 lg:px-0">
      <Container className="grid gap-y-20 md:gap-y-24 3xl:gap-y-32">
        <div className="2xl:w-10/12 grid gap-y-6">
          <Title type="h1" display="d1" className="text-center lg:text-start">
            Smart Process to meet your goals
          </Title>
          <SubTitle variant="v2" className='text-gray-200'>
            We&apos;ve spent many years in the healthcare industry and recognize
            the challenges and complexities customers face to ensure that
            biotechnology products meet all the quality attributes required by
            regulatory agencies.
          </SubTitle>
          <SubTitle variant="v2" className='text-gray-200'>
            We want to keep you abreast with the evolving changes through
            tailor-made, secure, and scalable technology solutions to enhance
            your business outcomes and generate the data intelligence needed to
            gain a competitive edge.
          </SubTitle>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-9 sm:gap-10 lg:gap-x-24 2xl:gap-x-12">
          {processSteps.map((step, idx) => (
            <div key={idx} className={`flex items-center justify-center relative ${processSteps.length % 2 === 1 && idx === processSteps.length - 1 && 'sm:col-span-2 sm:w-1/2 mx-auto md:col-span-1 md:w-auto'}`}>
              {idx > 0 && (
                <Arrow className="shrink-0 absolute left-2 -translate-x-24 top-1/2 -translate-y-1/2 hidden lg:block" />
              )}
              <div className="grid gap-y-2">
                <div className="w-[88px] h-[88px] bg-white rounded-full p-5 mx-auto md:ml-0 mb-3 xl:mb-5 flex justify-center items-center">
                  {getIconComponentByName(step.icon)}
                </div>
                <Title type="h2" display="d6" className="text-center md:text-start sm:!text-base 3xl:!text-lg">{step.name}</Title>
                <SubTitle variant="v2" className="text-gray-200 sm:text-sm md:text-base">{step.details}</SubTitle>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-12 gap-y-4">
          <Title
            type="h3"
            display="d4"
            className="sm:col-span-6 md:col-span-5 lg:col-span-4 xl:col-span-3 2xl:col-span-3"
          >
            Software Development & Beyond
          </Title>
          <SubTitle
            variant="v2"
            className="text-gray-200 sm:col-span-12 xl:col-span-8 2xl:col-start-5 2xl:col-span-8 !text-start"
          >
            We’re on a mission to facilitate and accelerate clients’ growth and
            success. Our passionate team become a part of your team, empowering
            you to achieve your strategic goals through the smooth completion of
            every phase of the product development life cycle until its final
            delivery. The sustainable success of our clients is significant
            proof of the high value our digital health solutions have added to
            their business accomplishments. By offering a full range of IT
            infrastructure, network security services, and IT compliance, all
            under one roof, we support your company’s IT backbone and multiply
            the value of our software development capabilities.
          </SubTitle>
        </div>
      </Container>
    </Section>
  );
};

export default Proccess;