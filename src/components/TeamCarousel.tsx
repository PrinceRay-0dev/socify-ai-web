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
    image: "/lovable-uploads/11af5b45-d526-4e22-81ab-a69dc85b5e9f.png",
    gender: "male"
  },
  {
    name: "Meet",
    role: "AI Developer & Database Developer",
    image: "/lovable-uploads/ba845495-f4dc-49d9-88af-f468fd23335d.png",
    gender: "male"
  },
  {
    name: "Vaishnavi",
    role: "Deployer",
    image: "/lovable-uploads/573c670f-0eaa-4331-bc69-ddc3fcb4e5c5.png",
    gender: "female"
  },
  {
    name: "Apurva Kulkarni",
    role: "UI/UX Designer",
    image: "/lovable-uploads/03223ea2-e60e-40ee-a2c7-87dacfccba93.png",
    gender: "female"
  }
];

const TeamCarousel = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8 fade-in">
          Meet Our Team
        </h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index}>
                <Card className="p-6 bg-background/60 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all">
                  <div className="flex flex-col items-center space-y-4">
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
