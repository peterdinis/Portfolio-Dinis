function Skill(props) {
  return (
    <>
      <h1 className="pt-3 text-3xl ml-2">
        {props.name} - {props.status}
      </h1>
    </>
  );
}

export default Skill;
