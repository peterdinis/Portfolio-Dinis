import Project from "./Project";

const MyProjects = () => {
  return (
    <div className="mt-1">
      <h1 className="text-center mt-4 text-4xl">Moje niektoré projekty</h1>
      <div className="mt-5 px-10 grid grid-cols-4 gap-4">
        <Project 
          name="RRRR"
          description="RRRR"
          subName="React React Query Styled-Components Typescript Material UI"
          link="https://github.com/peterdinis/React-SPST-Kniznica"
          firstLinkName="Github"
        />

        <Project 
          name="RRRR"
          description="RRRR"
          subName="Python Django Postgresql"
          link="https://github.com/peterdinis/SPST-Book-API"
          firstLinkName="Github"
        />

        <Project 
          name="React Typescript Farm Site"
          description="RRRR"
          subName="React Apollo Graphql Typescript"
          link="https://github.com/peterdinis/React-ProductsFarm"
          firstLinkName="Github"
        />

        <Project 
          name="Graphql Python Farm site api"
          description="RRRR"
          subName="Python graphql"
          link="https://github.com/peterdinis/Django-Graphql-API"
          firstLinkName="Github"
        />
        
        <Project 
          name="Snake Game"
          description="RRRR"
          subName="Html css js"
          link="https://github.com/peterdinis/Javascript-Snake-Game"
          firstLinkName="Github"
        />

        <Project 
          name="React-Native GroceryShop"
          description="RRRR"
          subName="React-Native Expo Styled-components Typescript"
          link="https://github.com/peterdinis/React-Native-Grocery-App"
          firstLinkName="Github"
        />

        <Project 
          name="React Restaurant Site"
          description="RRRR"
          subName="React Typescript Tailwind Styled-components"
          link="https://github.com/peterdinis/React-RestaurantSite"
          firstLinkName="Github"
        />

        <Project 
          name="Laravel Restaurant api"
          description="RRRR"
          subName="Php laravel Postgresql"
          link="https://github.com/peterdinis/Laravel-Restaurant-API"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
