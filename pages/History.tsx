import React from "react";
import ArticleTemplate from "../components/article/ArticleTemplate";

function History() {
  const articleData = {
    title: "Colonialism and Tourismʻs Role in Violence Against Women",
    subtitle: "",
    author: "Angela Ellis",
    date: "July 7, 2024",
    heroImage: {
      src: "assets/history_hero/Onipaa_annexation_UH_Manoa.gif",
      alt: "Overthrow of Hawaiian Monarchy",
    },
    content: `The overthrow of Hawai'i has a lasting effect. Not just in how the ʻāina is thrown away and not taken care for,
the wahine ʻōiwi are also shown much disregard. Even starting with the forced removal of Queen Liliʻuokalani, as shown above.
This abuse and violence towards women is still prevalent today -- especially among wahine ʻōiwi. Before colonialism, prostitution did not exist in Hawaʻii

> in Hawai‘i, Kānaka Maoli women engaged in intercourse with these men. Their gender and sexuality was non-monogamous and non-heteronormative. Kānaka Maoli women
> then became spaces of colonial violence, through the rapid decline of the Kānaka Maoli population from sexually transmitted diseases to which they had no immunity.
> Furthermore, when businessmen from the U.S. and European nations established the whaling industry in Hawai‘i in the 18th century, they came
> to expect that Kānaka Maoli women would be available to them for sex in exchange for material
> goods, thus, introducing the concept of prostitution parallel to the introduction of foreign capitalistic systems of currency and exchange. When
> a kapu (ban) was placed on prostitution, whalers and businessmen responded violently."
>
> -- Missing and Murdered Native Hawaiian Women and Girls Task Force Report

This sentiment is also brought up in Part II Sex Trafficking in Hawaiʻi: The Stories of Survivors, citing the overthrow of the Hawaiʻi and may have a direct correlation
due to the 'hypersexualization, racism, cultural discointer-generational trauma suffered under western governance.

With colonialism came tourism. 'Come see the exotic beauty' was the theme of many past ads for Hawaiʻi, i.e. the Exotic Haena Bali Haʻi ad.  
> 
`,
    category: "History",
    tags: ["colonialism", "tourism"],
  };
  return (
    <div>
      <ArticleTemplate {...articleData} />
    </div>
  );
}

export default History;
