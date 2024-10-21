import chipBlack from '@/assets/chip-card-black.svg'
import chipWhite from '@/assets/chip-card-white.svg'

export function ChipCard({theme}: {theme: string}) {

  return <img src={theme == 'light' ? chipWhite : chipBlack} alt="" />
  
  
}
