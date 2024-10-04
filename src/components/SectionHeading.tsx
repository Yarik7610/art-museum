interface SectionHeadingProps {
  text1: string
  text2: string
}
export const SectionHeading: React.FC<SectionHeadingProps> = ({ text1, text2 }) => {
  return (
    <div className="section-heading">
      <p>{text1}</p>
      <h2>{text2}</h2>
    </div>
  )
}
