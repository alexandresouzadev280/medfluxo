import {
  Activity, AlertTriangle, BadgeCheck, BarChart3, BookOpen, Check, CheckCircle2, Clock, Cloud, Code2,
  Cross, Database, GraduationCap, Globe, HeartPulse, Home, Hospital, KeyRound, Link2, Lock,
  MessageCircle, Search, ShieldCheck, Users, Zap,
} from 'lucide-react'

const map = {
  activity: Activity, warning: AlertTriangle, verified: BadgeCheck, chart: BarChart3, book: BookOpen,
  check: Check, checkcircle: CheckCircle2, clock: Clock, cloud: Cloud, code: Code2, cross: Cross,
  database: Database, cap: GraduationCap, globe: Globe, heart: HeartPulse, home: Home,
  hospital: Hospital, key: KeyRound, link: Link2, lock: Lock, chat: MessageCircle, search: Search,
  trust: ShieldCheck, users: Users, bolt: Zap,
}

export default function Icon({ name, size = 24, strokeWidth = 1.8 }) {
  const C = map[name] || Activity
  return <C size={size} strokeWidth={strokeWidth} aria-hidden="true" />
}

export function Badge({ name, size = 26, hot = false }) {
  return (
    <span className={`badge${hot ? ' badge-hot' : ''}`}>
      <Icon name={name} size={size} />
    </span>
  )
}
