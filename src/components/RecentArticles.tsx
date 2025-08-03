
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RecentArticles = () => {
  const recentArticles = [
    {
      title: "ICD Nigeria signs MoU with Sofia University Bulgaria",
      excerpt: "30th September 2015 The Country Director of ICD Nigeria signed an MoU with Sofia University in Bulgaria",
      image: '/icd-uploads/bulgaria/sofia-uni-mou.png',
      author: "ICD Nigeria Media Team",
      date: "September 30, 2015",
      readTime: "5 min read",
    },
    {
      title: "Visit To Canadian High Commissioner",
      excerpt: "During a Courtesy visit  in company of Hajia Hadizat Umoru to the Canadian High Commissioner to Nigeria H. E. Jamie Christoff on Partnership between ICD and Canada.",
      image: '/icd-uploads/courtesy-visit/canadian-1.jpg',
      author: "ICD Nigeria Media Team",
      date: "October 3, 2024",
      readTime: "5 min read",
    },
    {
      title: "Visit To Polish Ambassador",
      excerpt: "During a courtesy visit to the Polish Ambassador to Nigeria Joanna Tarnawska in Abuja in company of Ahanor Otabot, Director IAESTE Nigeria",
      image: '/icd-uploads/courtesy-visit/polish-1.jpg',
      author: "ICD Nigeria Media Team",
      date: "August 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Bulgarian Consular visits ICD Nigeria Office in Abuja",
      excerpt: "The Bulgarian Ambassador pays a courtesy visit to ICD office in April 2024",
      image: '/icd-uploads/bulgaria/bulgarian-ambassador.jpg',
      author: "ICD Nigeria Media Team",
      date: "April 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "A day with the Oba of Benin kingdom in his palace",
      excerpt: "An exclusive glimpse into the rich traditions and royal ceremonies of the Benin Kingdom during a special palace visit.",
      images: [
        '/icd-uploads/obaofbenin/with-omonoba-1.png',
        '/icd-uploads/obaofbenin/with-omonoba-2.png'
      ],
      author: "ICD Nigeria Media Team",
      date: "December 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Annual Edo Day Celebration for 2024 in Abuja Nigeria",
      excerpt: "A vibrant celebration of Edo culture featuring traditional ceremonies, cultural displays, and community gathering in Abuja.",
      images: [
        '/icd-uploads/edoday/edo-fest-1.png',
        '/icd-uploads/edoday/edo-fest-2.png'
      ],
      author: "ICD Nigeria Media Team",
      date: "December 15, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Latest Blogs/Articles</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recentArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              {article.image && (
                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {article.images && (
                <div className="w-full h-48 overflow-hidden rounded-t-lg grid grid-cols-2 gap-1">
                  {article.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={img} 
                      alt={`${article.title} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
                <CardDescription>
                  By {article.author} • {article.date} • {article.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
