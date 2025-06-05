
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Gaming = () => {
  const gameRoles = [
    {
      title: "Gameplay Engineer",
      description: "Core to any game, these programmers are essential for bringing game mechanics to life. Their ability to implement complex systems makes them highly valuable.",
      detail: "We can get these guys for you, whether they use Unity, Unreal, Godot or any other game engine.",
      icon: "⚙️"
    },
    {
      title: "Technical Artist",
      description: "Bridging the gap between art and programming, they are vital for optimizing workflows and ensuring artistic vision is realized.",
      detail: "Let's help you get them for your team!",
      icon: "🎨"
    },
    {
      title: "3D Character Artist",
      description: "The creation of high quality 3d characters is a vital part of modern game development.",
      detail: "Let's help you get them for your team!",
      icon: "🎭"
    },
    {
      title: "Level Designer",
      description: "Creating engaging and immersive game levels is a specialized skill that is constantly in demand.",
      detail: "We can help you get the right fit for your team.",
      icon: "🏗️"
    },
    {
      title: "Game Designer",
      description: "Strong game designers are always needed, and those with a strong understanding of game systems are highly desired.",
      detail: "We can help you get them.",
      icon: "🎯"
    },
    {
      title: "Game UI/UX Designer",
      description: "As games become more complex, user experience is paramount, making these designers crucial.",
      detail: "Let's help you get them for your team!",
      icon: "📱"
    },
    {
      title: "Game Producer",
      description: "Strong producers are needed to keep projects on track, and are highly valued.",
      detail: "Let's help you get them for your team!",
      icon: "📋"
    },
    {
      title: "2D Artist/Concept Artist",
      description: "We can help you get the best 2d artists for your team. The character and environment concepts are made visible by these guys and for this reason they are always in high demand.",
      detail: "",
      icon: "🖌️"
    },
    {
      title: "Network Programmer",
      description: "Online gaming is booming, so network programmers are essential for creating seamless multiplayer experiences.",
      detail: "We can help you get them.",
      icon: "🌐"
    },
    {
      title: "3D Modeller/Animator",
      description: "As important as they are to any high quality development team, the best ones are not really easy to find out there.",
      detail: "We can help you get the best ones for your team!",
      icon: "🎬"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎮</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gaming Industry Talent
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            From indie studios to AAA game development, we connect you with the gaming professionals 
            who will bring your vision to life
          </p>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gaming Roles We Recruit For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our extensive network includes top-tier gaming professionals across all disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameRoles.map((role, index) => (
              <Card key={index} className="card-hover h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-3xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {role.description}
                  </p>
                  {role.detail && (
                    <p className="text-red-600 font-medium text-sm">
                      {role.detail}
                    </p>
                  )}
                  <Badge className="mt-4 bg-red-100 text-red-800 hover:bg-red-200 w-fit">
                    In High Demand
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Gaming Technologies
            </h2>
            <p className="text-lg text-gray-600">
              Our talent is proficient in industry-leading tools and engines
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🔷</div>
              <h3 className="font-semibold">Unity</h3>
              <p className="text-gray-600 text-sm mt-2">Cross-platform game engine</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold">Unreal Engine</h3>
              <p className="text-gray-600 text-sm mt-2">High-fidelity game development</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="font-semibold">Godot</h3>
              <p className="text-gray-600 text-sm mt-2">Open-source game engine</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold">Custom Engines</h3>
              <p className="text-gray-600 text-sm mt-2">Proprietary development tools</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream Gaming Team?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            You might have been struggling to find and hire the right candidates, but now our experts can tell you how to avoid common mistakes and accelerate interviews.
          </p>
          <p className="text-lg mb-8 text-red-100">
            Book a Free consulting call with one of our recruitment experts to discuss:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div>
              <h4 className="font-semibold mb-2">Your Budget vs. Expectations Match</h4>
              <p className="text-red-100 text-sm">Let us analyze your expectations and provide feedback on whether they align with market standards.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Your Offer Positioning</h4>
              <p className="text-red-100 text-sm">Get feedback on who your vacancy could be the "Dream Job" for and whether the offer is compelling.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Your Target Location</h4>
              <p className="text-red-100 text-sm">Learn what tech hubs, cities, and countries would be a better fit given your budget constraints.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Collaboration</h4>
              <p className="text-red-100 text-sm">Discuss what we can do for you and how we can make the hiring process easy and seamless.</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
            Book a Free Consulting Call
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gaming;
