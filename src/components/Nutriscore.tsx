interface NutriscoreProps {
  grade: string
}

export default function Nutriscore({ grade }: NutriscoreProps) {
  return (
    <div className='nutriscore'>
      <h3>NUTRI-SCORE</h3>
      <ol className='grade'>
        <li className={grade.charAt(0) === 'A' ? 'active' : ''}>A</li>
        <li className={grade.charAt(0) === 'B' ? 'active' : ''}>B</li>
        <li className={grade.charAt(0) === 'C' ? 'active' : ''}>C</li>
        <li className={grade.charAt(0) === 'D' ? 'active' : ''}>D</li>
        <li className={grade.charAt(0) === 'E' ? 'active' : ''}>E</li>
      </ol>
    </div>
  )
}
