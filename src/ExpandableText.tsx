interface Props {
  children: string;
}
function ExpandableText({ children }: Props) {
  return <div>{children}</div>;
}

export default ExpandableText;
