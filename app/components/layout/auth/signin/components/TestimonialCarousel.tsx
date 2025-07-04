import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
const testimonials = [
  {
    quote:
      "A total game-changer for our workflow. These AI surveys help us uncover crucial user pain points with incredible speed and surprising accuracy every time.",
    name: "Harry Miles",
    role: "UX Researcher @ Innovate Inc.",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but the conversational format yields much richer feedback than our old, boring forms. The insights are simply deeper.",
    name: "Sarah Chen",
    role: "Product Manager @ DataDrive",
    rating: 5,
  },
  {
    quote:
      "The setup was surprisingly intuitive. We were deploying our first AI-powered survey within an hour, and the quality of responses was immediately noticeable.",
    name: "David Rodriguez",
    role: "Lead Designer @ Creative Solutions",
    rating: 4,
  },
  {
    quote:
      "This tool doesn't just collect data; it starts a conversation. It has fundamentally changed how we approach user feedback and iterative design processes.",
    name: "Emily White",
    role: "CEO & Founder @ StartupFast",
    rating: 5,
  },
  {
    quote:
      "Our response rates have nearly doubled. Users genuinely seem to enjoy the interactive experience, which is something I never thought I'd say about surveys.",
    name: "Michael Brown",
    role: "Marketing Head @ EngageMore",
    rating: 5,
  },
  {
    quote:
      "The AI analysis saves me hours of work. It smartly categorizes feedback, allowing me to focus on strategy instead of tedious data sorting.",
    name: "Jessica Lee",
    role: "Data Analyst @ Metrics Co.",
    rating: 4,
  },
  {
    quote:
      "A brilliant application of AI for a real-world problem. It feels less like a tool and more like an intelligent research assistant for our team.",
    name: "Kevin Liu",
    role: "VP of Engineering @ TechFront",
    rating: 5,
  },
  {
    quote:
      "Finally, a survey tool that users don't hate! The conversational flow is a massive improvement over endless radio buttons and sterile text boxes.",
    name: "Olivia Martinez",
    role: "User Experience Lead @ PixelPerfect",
    rating: 4,
  },
  {
    quote:
      "We've identified key friction points in our app that were completely invisible to us before. The investment paid for itself within the first month.",
    name: "Daniel Wilson",
    role: "Product Owner @ AgileFlow",
    rating: 5,
  },
  {
    quote:
      "The elegance of the solution is its simplicity. It's powerful enough for our data scientists, yet simple enough for our interns to use effectively.",
    name: "Sophia Taylor",
    role: "Director of Operations @ ScaleUp",
    rating: 5,
  },
];

const StarIcon = ({ id }: any) => {
  return (
    <svg key={id} width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M11.9482 5.75293L17.8389 7.01953L13.8232 11.4834L14.4307 17.4385L8.91504 15.0244L3.39941 17.4385L4.00586 11.4834L-0.00976562 7.01953L5.88086 5.75293L8.91504 0.581055L11.9482 5.75293Z"
        fill="white"
      />
    </svg>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationDuration = 200;
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
  };
  const handleChange = (direction: any) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      let newIndex;
      if (direction === "next") {
        newIndex = (currentIndex + 1) % testimonials.length;
      } else {
        newIndex =
          (currentIndex - 1 + testimonials.length) % testimonials.length;
      }
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, animationDuration);
  };
  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="border-[3px] w-full border-[#FFFFFF2B] p-[25px] rounded-[20px]">
      <div
        className={`transition-all ease-in-out duration-${animationDuration} ${
          isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <p className="text-[18px] h-[100px] font-semibold">
          "{currentTestimonial.quote}"
        </p>
        <p className="text-[27px] font-bold mt-4">{currentTestimonial.name}</p>
        <p className="pt-2 text-[16px] font-medium">
          {currentTestimonial.role}
        </p>
        <div className="flex gap-1 mt-3">
          {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
            <StarIcon key={index} id={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-end items-center mt-3">
        <div className="flex gap-3">
          <button
            onClick={() => handleChange("prev")}
            className="cursor-pointer"
          >
            <CircleChevronLeft
              height={30}
              width={30}
              color="white"
              strokeWidth={"1px"}
            />
          </button>
          <button
            onClick={() => handleChange("next")}
            className="cursor-pointer"
          >
            <CircleChevronRight
              height={30}
              width={30}
              color="white"
              strokeWidth={"1px"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
