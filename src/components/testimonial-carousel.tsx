"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
}

export function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "I have known Sukain for many years and she has been servicing my banking needs which includes advice on investments, credit cards and other liability products. Her advice has always been very sound and conservative. She can be trusted to provide excellent service and give very safe and sound investment advice.",
      name: "Mr. Navneet Chopra",
      role: "General Manager MAS Real Estate",
    },
    {
      id: 2,
      content:
        "My experience with Sukain Dsouza was nothing short of outstanding. She showed true professionalism, patience, and a genuine commitment to helping me. What stood out most was her responsiveness and attention to detail they didn't just provide answers, they provided solutions. Every interaction felt personal and supportive, which made a real difference. It's rare to come across such dedication and integrity in service today. I would highly recommend her to anyone looking for expertise with a customer-first approach.",
      name: "Mr. Mahesh Shahdad",
      role: "Head of Wealth Planning - Europe, Middle East and Africa @ Standard Chartered Bank",
    }
    // {
    //   id: 3,
    //   content:
    //     "The financial advisors at Wealthbridge Consulting took the time to understand my goals and created a tailored plan that has significantly improved my financial health.",
    //   name: "Emily Rodriguez",
    //   role: "Financial Advisory Client",
    // },
    // {
    //   id: 4,
    //   content:
    //     "I've worked with several financial advisors over the years, but none have provided the level of service and expertise that I've received from Wealthbridge Consulting.",
    //   name: "Robert Thompson",
    //   role: "Wealth Management Client",
    // },
    // {
    //   id: 5,
    //   content:
    //     "Their tax planning strategies saved my business thousands of dollars. The team at Wealthbridge truly understands how to optimize financial outcomes.",
    //   name: "Jennifer Lee",
    //   role: "Tax Planning Client",
    // },
    // {
    //   id: 6,
    //   content:
    //     "The retirement plan Wealthbridge created for me has given me peace of mind knowing my future is secure. Their ongoing support has been invaluable.",
    //   name: "David Wilson",
    //   role: "Retirement Planning Client",
    // },
    // {
    //   id: 7,
    //   content:
    //     "Wealthbridge's investment team has consistently outperformed my expectations. Their market insights and strategic approach have significantly grown my portfolio.",
    //   name: "Amanda Garcia",
    //   role: "Investment Management Client",
    // },
    // {
    //   id: 8,
    //   content:
    //     "The business solutions provided by Wealthbridge helped my company navigate a challenging economic period and emerge stronger than before.",
    //   name: "Thomas Wright",
    //   role: "Business Solutions Client",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, totalPages]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              "{testimonial.content}"
            </p>
            <div className="mt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === currentIndex
                  ? "bg-primary"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
