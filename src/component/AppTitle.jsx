

function AppTitle(props) {

    const {title="Box Office", subTitle="Search movie app"} = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default AppTitle
