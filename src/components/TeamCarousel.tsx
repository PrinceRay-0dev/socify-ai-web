import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Prince",
    role: "Frontend & Backend Developer",
    image: "/placeholder.svg",
    gender: "male"
  },
  {
    name: "Meet",
    role: "AI Developer & Database Developer",
    image: "/placeholder.svg",
    gender: "male"
  },
  {
    name: "Vaishnavi",
    role: "Deployer",
    image: "/placeholder.svg",
    gender: "female"
  },
];

const TeamCarousel = () => {
  return (
    <footer className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            <CarouselItem className="mb-10">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold leading-7 text-primary fade-in">
                  Meet Our Team
                </h2>
                <p className="text-4xl md:text-5xl font-bold tracking-tight fade-in">
                  Created by Deogiri College,<br />Department of Bioinformatics
                </p>
              </div>
            </CarouselItem>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <div className="flex flex-col items-center space-y-6">
                    <Avatar className="w-40 h-40">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/10">
                        {member.gender === 'female' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0 2v4M8 22h8"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="font-semibold text-2xl">{member.name}</h3>
                      <p className="text-lg text-gray-500 mt-2">{member.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </footer>
  );
};

export default TeamCarousel;