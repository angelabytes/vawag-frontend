import React from "react";
import ArticleCard from "../components/article/ArticleCard";

function EducationPage() {
  const historyArticleCardData = {
    title: "Colonialism and Tourism",
    description:
      "The overthrow of Hawaii has a lasting effect on the Native Hawaiian people and the 'āina. This article explores colonialism's role in violence and its historical impact.",
    imageUrl: "/public/assets/history_hero/Onipaa_annexation_UH_Manoa.gif",
    author: "Angela",
    date: "July 7, 2024",
    link: "/history-article",
    category: "History",
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-[var(--umber)] mb-8">Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* History Article Card */}
        <ArticleCard {...historyArticleCardData} />
      </div>
    </div>
  );
}

export default EducationPage;
