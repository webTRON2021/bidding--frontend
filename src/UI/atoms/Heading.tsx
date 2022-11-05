type propsType = {
  text: string;
};
export default (props: propsType) => {
  return <div className="heading_text">{props.text}</div>;
};
