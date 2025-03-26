import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CalendarHeatMap from 'react-calendar-heatmap'; // Custom component for contribution graph
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FilterIcon, HeartIcon, PlusIcon, StarIcon } from "lucide-react";
import { MessageIcon } from "@/components/Icon";
import { ShareIcon } from "@/components/Icon";

export default function ProfilePage() {
    const projects = [
        { id: 1, title: "Project 1", description: "A cool project", image: "/home.jpg" },
        { id: 2, title: "Project 2", description: "Another cool project", image: "/home.jpg" },
    ];

    const posts = [
        { id: 1, content: "Just launched my new project!", likes: 10, comments: 5 },
        { id: 2, content: "Working on something exciting...", likes: 15, comments: 8 },
    ];

    const skills = ["React", "Node.js", "Python", "JavaScript"];
    return (
        <div className="flex p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex flex-col">
                {/* Left Side */}
                <div className="w-full mb-8">
                    <div className="relative">
                        {/* Cover Image */}
                        <div className="h-48 w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg"></div>

                        {/* Profile Info Overlay */}
                        <div className="flex items-end absolute bottom-0 transform translate-y-1/2 left-8">
                            <Avatar className="h-24 w-24 ring-4 ring-white">
                                <AvatarImage src="/home.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 pb-2">
                                <h2 className="text-2xl font-bold text-white">John Doe</h2>
                                <p className="text-gray-200">Computer Science, Stanford University</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="absolute right-8 bottom-4 flex gap-2">
                            <Button size="sm" variant="secondary">Follow</Button>
                            <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm">
                                <FaGithub className="h-4 w-4 mr-2" /> GitHub
                            </Button>
                            <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm">
                                <FaLinkedin className="h-4 w-4 mr-2" /> LinkedIn
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="mt-16 grid grid-cols-3 gap-6">
                    {/* Left Column - 1/3 width */}
                    <div className="col-span-1 space-y-6">
                        {/* About Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>About</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Full-stack developer passionate about creating user-friendly applications.
                                    Currently working on collaborative tools for student creators.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Skills Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Education/Experience */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="border-l-2 border-gray-200 pl-4">
                                    <h4 className="font-medium">Stanford University</h4>
                                    <p className="text-sm text-gray-500">2021 - Present</p>
                                    <p className="text-sm mt-1">Computer Science Major</p>
                                </div>
                                <div className="border-l-2 border-gray-200 pl-4">
                                    <h4 className="font-medium">Tech Startup</h4>
                                    <p className="text-sm text-gray-500">Summer 2023</p>
                                    <p className="text-sm mt-1">Frontend Developer Intern</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - 2/3 width */}
                    <div className="col-span-2 space-y-6">
                        {/* Contribution Graph - Redesigned */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Contributions</CardTitle>
                                    <CardDescription>Your activity over time</CardDescription>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs text-gray-500">Less</span>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded bg-emerald-100"></div>
                                        <div className="w-3 h-3 rounded bg-emerald-200"></div>
                                        <div className="w-3 h-3 rounded bg-emerald-300"></div>
                                        <div className="w-3 h-3 rounded bg-emerald-400"></div>
                                        <div className="w-3 h-3 rounded bg-emerald-500"></div>
                                    </div>
                                    <span className="text-xs text-gray-500">More</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CalendarHeatMap
                                    values={[]}
                                    classForValue={(value) => {
                                        if (!value) return 'color-empty';
                                        return `color-scale-${value.count}`;
                                    }}
                                />
                                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                                    <span>Total contributions: 423</span>
                                    <span>Current streak: 7 days</span>
                                    <span>Longest streak: 14 days</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Content Tabs - Redesigned */}
                        <Tabs defaultValue="projects" className="w-full">
                            <div className="flex items-center justify-between mb-4">
                                <TabsList className="h-10">
                                    <TabsTrigger value="projects" className="px-4">Projects</TabsTrigger>
                                    <TabsTrigger value="posts" className="px-4">Posts</TabsTrigger>
                                    <TabsTrigger value="achievements" className="px-4">Achievements</TabsTrigger>
                                </TabsList>
                                <div>
                                    <Button variant="outline" size="sm" className="mr-2">
                                        <FilterIcon className="h-4 w-4 mr-2" /> Filter
                                    </Button>
                                    <Button size="sm">
                                        <PlusIcon className="h-4 w-4 mr-2" /> New
                                    </Button>
                                </div>
                            </div>

                            {/* Projects Tab */}
                            <TabsContent value="projects" className="mt-0">
                                <div className="grid grid-cols-2 gap-4">
                                    {projects.map((project) => (
                                        <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                                            <div className="relative h-48">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                                    <div className="p-4 text-white">
                                                        <h3 className="font-bold text-lg">{project.title}</h3>
                                                        <p className="text-sm text-gray-200">{project.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center space-x-4">
                                                        <span className="flex items-center text-sm text-gray-500">
                                                            <StarIcon className="h-4 w-4 mr-1" /> 24
                                                        </span>
                                                        <span className="flex items-center text-sm text-gray-500">
                                                            <HeartIcon className="h-4 w-4 mr-1" /> 8
                                                        </span>
                                                    </div>
                                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">React</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Posts Tab */}
                            <TabsContent value="posts" className="mt-0">
                                <div className="space-y-4">
                                    {posts.map((post) => (
                                        <Card key={post.id} className="overflow-hidden">
                                            <CardContent className="p-6">
                                                <div className="flex items-start space-x-4">
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarImage src="/avatar.jpg" />
                                                        <AvatarFallback>JD</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="font-medium">John Doe</h4>
                                                            <span className="text-xs text-gray-500">2 days ago</span>
                                                        </div>
                                                        <p className="mt-2">{post.content}</p>
                                                        <div className="mt-4 flex items-center space-x-4">
                                                            <Button variant="ghost" size="sm" className="text-gray-500">
                                                                <HeartIcon className="h-4 w-4 mr-1" /> {post.likes}
                                                            </Button>
                                                            <Button variant="ghost" size="sm" className="text-gray-500">
                                                                <MessageIcon className="h-4 w-4 mr-1" /> {post.comments}
                                                            </Button>
                                                            <Button variant="ghost" size="sm" className="text-gray-500">
                                                                <ShareIcon className="h-4 w-4 mr-1" /> Share
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

            </div>



        </div>
    );
}