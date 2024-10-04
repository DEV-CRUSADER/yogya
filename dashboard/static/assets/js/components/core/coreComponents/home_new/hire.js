import React from "react";
import HeadingDescription from "./headingDescription";

const hire = () => {
  const cards = [
    // card data 1
    {
      ImageURL:
        "https://imgs.search.brave.com/9crHZQvkWFjVOl4HMI_1nfFFUI-hl5KYK51ST81O_Fw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc",
      Post: {
        PostImage1: "https://cdn-icons-png.flaticon.com/128/16333/16333743.png",
        PostTitle1: "Admin",
        PostImage2: "https://cdn-icons-png.flaticon.com/128/1383/1383507.png",
        PostTitle2: "Finance",
      },
      About: "Special benefit through Invest by your money.",
    },
    // card data 2
    {
      ImageURL:
        "https://imgs.search.brave.com/9crHZQvkWFjVOl4HMI_1nfFFUI-hl5KYK51ST81O_Fw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc",
      Post: {
        PostImage1: "https://cdn-icons-png.flaticon.com/128/16333/16333743.png",
        PostTitle1: "Admin",
        PostImage2: "https://cdn-icons-png.flaticon.com/128/1383/1383507.png",
        PostTitle2: "Finance",
      },
      About: "Special benefit through Invest by your money.",
    },
    // card data 3
    {
      ImageURL:
        "https://imgs.search.brave.com/9crHZQvkWFjVOl4HMI_1nfFFUI-hl5KYK51ST81O_Fw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc",
      Post: {
        PostImage1: "https://cdn-icons-png.flaticon.com/128/16333/16333743.png",
        PostTitle1: "Admin",
        PostImage2: "https://cdn-icons-png.flaticon.com/128/1383/1383507.png",
        PostTitle2: "Finance",
      },
      About: "Special benefit through Invest by your money.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <HeadingDescription
          Page="We are hire for"
          Heading="Explore Solutions"
          Description="lorem ipsum is simply duma text of the printing and typeSettings industry. Lorem Ipsum has been the under dummy text ever since the 1500s.when an unknowns printer"
          center={true}
        />
      </div>
      <div className="flex justify-evenly gap-5 flex-wrap">
        <div className="absolute bg-lime-200 h-1/2 w-0.1 left-10"></div>
        {cards.map((cardData) => {
          return (
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              {/* Image */}
              <div className="h-48 w-full bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={cardData.ImageURL}
                  alt="People discussing finance"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Icons and Title */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="bg-gray-100 p-2 rounded-full text-gray-600">
                    {/* Admin Icon */}
                    <img
                      src={cardData.Post.PostImage1}
                      alt="Admin"
                      className="h-5 w-5"
                    />
                  </span>
                  <span className="ml-2 text-gray-700 font-semibold">
                    {cardData.Post.PostTitle1}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="bg-gray-100 p-2 rounded-full text-gray-600">
                    {/* Finance Icon */}
                    <img
                      src={cardData.Post.PostImage2}
                      alt="Admin"
                      className="h-5 w-5"
                    />
                  </span>
                  <span className="ml-2 text-gray-700 font-semibold">
                    {cardData.Post.PostTitle2}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 font-semibold text-lg mb-2">
                {cardData.About}
              </p>

              {/* Read More link */}
              <a
                href="#"
                className="text-green-500 font-semibold hover:underline"
              >
                Read more &gt;
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default hire;