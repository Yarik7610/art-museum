interface SectionHeadingProps {
  text1: string
  text2: string
}
export const SectionHeading = ({ text1, text2 }: SectionHeadingProps) => {
  return (
    <div className="section-heading">
      <p>{text1}</p>
      <h2>{text2}</h2>
    </div>
  )
}
