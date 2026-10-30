import type { ComponentProps } from 'react'

type IconProps = ComponentProps<'svg'>

export function PawIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...props}>
      <ellipse cx="10" cy="31" rx="7" ry="9" transform="rotate(-18 10 31)" />
      <ellipse cx="23" cy="14" rx="7.5" ry="10" transform="rotate(-8 23 14)" />
      <ellipse cx="41" cy="14" rx="7.5" ry="10" transform="rotate(8 41 14)" />
      <ellipse cx="54" cy="31" rx="7" ry="9" transform="rotate(18 54 31)" />
      <path d="M32 27c-11 0-21 11-21 22 0 8 6 12 12 11 3-.5 6-2 9-2s6 1.500 9 2c6 1 12-3 12-11 0-11-10-22-21-22z" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function LineIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.500 6.500h.01" />
    </LineIcon>
  )
}

export function FoodIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M6 4.500c1 1.200 2 1.800 3.500 2h5.500c1.500 0 3-.6 4-1.500l.8 3.500c1.500 1 2.200 2.300 2.200 3.500s-.9 2.300-2.200 3l-.3 3.500H4.700l-.4-3.500C3 15.300 2 14.300 2 12.800s1-2.800 2.500-3.800z" />
      <path d="M7.800 11.300h2M14.200 11.300h2M10.500 14.300c.7.8 2.300.8 3 0" />
    </LineIcon>
  )
}

export function MedicineIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="9" y="2.500" width="6" height="4" rx="1.500" />
      <rect x="6.500" y="6.500" width="11" height="15" rx="2.500" />
      <path d="M12 12.500c-.8-1-2.300-.5-2.300.7 0 1 1.300 2 2.300 2.800 1-.8 2.300-1.800 2.300-2.800 0-1.200-1.500-1.700-2.300-.7z" fill="currentColor" stroke="none" />
    </LineIcon>
  )
}

export function ToyIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M14.800 2.500c1.300-.2 2.600.5 3.100 1.700 1.800-.2 3.300 1.300 3.100 3.100 1.200.9 1.300 2.800.2 3.800-.2 1.900-2.300 3-4 2.200-1.300 1-3.200.8-4.200-.4L6.800 19.800c-.3 1.300-1.900 2-3 1.300-1.200-.6-1.500-2.200-.7-3.200l6.700-6.700c-1-1.300-.9-3.100.2-4.200-.1-1.900 1.800-3.500 3.600-2.900z" />
      <path d="M15.200 6.500h.01M18 9.500h.01M14.700 10.500h.01" strokeWidth="2" />
    </LineIcon>
  )
}

export function CollarIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12.500" r="9.500" />
      <path d="M6.500 8.200c1 1.600 2.300 2.300 3.800 2.100M17.500 8.200c-1 1.600-2.300 2.300-3.800 2.100M8.300 15.300c1.700 2.200 5.700 2.200 7.400 0" />
    </LineIcon>
  )
}

export function ComfortIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 2.500a4 4 0 0 1 4 4c0 .6-.1 1.200-.4 1.700 3 1.200 5.400 4 5.400 7.300 0 3.800-3.800 6-9 6s-9-2.200-9-6c0-3.300 2.400-6.100 5.400-7.300A4 4 0 0 1 12 2.500z" />
      <path d="M9.800 11.500h.01M14.200 11.500h.01" strokeWidth="2.200" />
      <path d="M8.500 14.800c1.500 2.200 5.500 2.200 7 0" />
    </LineIcon>
  )
}

type HeartDoodleProps = IconProps & {
  ticks?: boolean
}

export function HeartDoodle({ ticks = true, ...props }: HeartDoodleProps) {
  return (
    <svg
      viewBox={ticks ? '0 0 54 67' : '0 22 41 45'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 65C10 57 1 48 1 37c0-8 5-12 10-12 4 0 7.500 4 9 10 1.500-6 6-12 12-12 5 0 8 5 8 12 0 12-12 22-21 30z" />
      {ticks && <path d="M33 2l-1 11M52 6l-7 9" />}
    </svg>
  )
}

export function HeartSolid(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 21.500C5 15.500 1.500 12 1.500 7.800 1.500 4.700 4 2.500 6.900 2.500c2 0 3.900 1.100 5.100 3 1.200-1.900 3.100-3 5.100-3 2.900 0 5.400 2.200 5.400 5.300 0 4.200-3.500 7.700-10.500 13.700z" />
    </svg>
  )
}
