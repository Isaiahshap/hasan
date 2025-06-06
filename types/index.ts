export interface ClipData {
  title: string
  views: number
  thumbnail: string
  duration: string
}

export interface MerchItem {
  name: string
  type: string
  price: number
  image: string
}

export interface PressLogo {
  name: string
  logo: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface AnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export interface GlitchTextProps {
  text: string
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
} 