import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Prince",
    role: "Frontend & Backend Developer",
    image: "/prince.jpg",
    gender: "male"
  },
  {
    name: "Meet",
    role: "AI Developer & Database Developer",
    image: "/meet.jpg",
    gender: "male"
  },
  {
    name: "Vaishnavi",
    role: "Deployer",
    image: "/vaishnavi.jpg",
    gender: "female"
  },
  {
    name: "Apurva Kulkarni",
    role: "UI/UX Designer",
    image: "/apurva.jpg",
    gender: "female"
  }
];

const TeamCarousel = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12 fade-in">
          Meet Our Team
        </h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index}>
                <Card className="p-6 bg-background/60 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all">
                  <div className="flex flex-col items-center space-y-6">
                    <Avatar className="w-32 h-32 border-4 border-primary/20">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/10">
                        {member.gender === 'female' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0 2v4M8 22h8"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        {member.name}
                      </h3>
                      <p className="text-lg text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </footer>
  );
};

export default TeamCarousel;