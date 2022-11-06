type propsType = {
  text: string;
};
export default (props: propsType) => {
  return <div className="title_text">{props.text}</div>;
};
