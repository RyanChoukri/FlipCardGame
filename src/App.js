import React from "react";
import "./styles.css";
import FlipGameContainers from "./containers/FlipGameContainer";

const getShuffledArr = arr => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

const listFlipData = [
  {
    content:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Vincent_van_Gogh_-_Portret_van_de_postbode_Joseph_Roulin.jpg"
  },
  {
    content:
      "https://www.culturespaces.com/sites/ceportail/files/styles/oeuvre_lightbox/public/192281_web_0.jpg?itok=H5g0YJlH"
  },
  {
    content:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=598x10000:format=jpg/path/s33f4b296991f4cd1/image/i095e62341d6fd8ea/version/1358196315/image.jpg"
  },
  {
    content:
      "https://i.pinimg.com/originals/f0/c7/d5/f0c7d51c95a6d9ceeae57b0eba4fef5e.jpg"
  },
  {
    content:
      "https://www.repro-tableaux.com/kunst/vincent_van_gogh/mittagsrast.jpg"
  },
  //{
  //  content:
  //   "https://www.kazoart.com/blog/wp-content/uploads/2017/03/van-gogh-la-nuit-etoilee-1.jpg"
  //},
  {
    content:
      "http://prod.attention-a-la-peinture.com/upload/produit/photo/van-gogh-tournesols-reproduction-grands-maitres-peinture-sur-toile-galerie-art-artiste-peintre-copiste-professionnel-qualite-tableaux-musee-france-culture.jpg"
  }
  //{
  // content:
  //    "https://www.lejournaldesarts.fr/sites/lejournaldesarts/files/styles/libre_w468/public/articles/134881.jpg?itok=WuqJBAbb"
  // }
];

const generatedId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

const generateList = () => {
  const flipcards = getShuffledArr(listFlipData.concat(listFlipData));
  return flipcards.map(e => {
    const freezeObj = Object.assign({}, e);
    freezeObj.id = generatedId();
    freezeObj.fliped = false;
    return freezeObj;
  });
};

export default function App() {
  return <FlipGameContainers listFlipData={generateList()} />;
}
