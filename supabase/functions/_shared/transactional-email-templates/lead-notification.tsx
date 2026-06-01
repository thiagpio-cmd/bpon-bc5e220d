import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface LeadNotificationProps {
  nome?: string
  empresa?: string
  email?: string
  whatsapp?: string
  faturamento?: string
  desafio?: string
  cidade?: string
  segmento?: string
  pessoas?: string
  ferramenta?: string
}

const fallback = (v?: string) => (v && v.trim() ? v : 'Não informado')

const LeadNotificationEmail = ({
  nome,
  empresa,
  email,
  whatsapp,
  faturamento,
  desafio,
  cidade,
  segmento,
  pessoas,
  ferramenta,
}: LeadNotificationProps) => {
  const complementares = [
    cidade ? ['Cidade/UF', cidade] as const : null,
    segmento ? ['Segmento', segmento] as const : null,
    pessoas ? ['Pessoas no financeiro', pessoas] as const : null,
    ferramenta ? ['Ferramenta principal', ferramenta] as const : null,
  ].filter(Boolean) as Array<readonly [string, string]>

  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Novo lead Fintex BPO: {nome || 'sem nome'}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brand}>Fintex BPO</Text>
            <Heading style={h1}>Novo lead recebido</Heading>
            <Text style={subtitle}>
              Solicitação enviada pelo formulário de diagnóstico do site.
            </Text>
          </Section>

          <Section style={card}>
            <Row label="Nome" value={fallback(nome)} />
            <Row label="Empresa" value={fallback(empresa)} />
            <Row label="E-mail" value={fallback(email)} />
            <Row label="Telefone / WhatsApp" value={fallback(whatsapp)} />
          </Section>

          <Section style={card}>
            <Text style={sectionTitle}>Diagnóstico</Text>
            <Row label="Faixa de faturamento" value={fallback(faturamento)} />
            <Row label="Principal desafio" value={fallback(desafio)} multiline />
          </Section>

          {complementares.length > 0 && (
            <Section style={card}>
              <Text style={sectionTitle}>Informações complementares</Text>
              {complementares.map(([label, value]) => (
                <Row key={label} label={label} value={value} />
              ))}
            </Section>
          )}

          <Hr style={hr} />
          <Text style={footer}>
            Responda diretamente para o lead utilizando os dados acima.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({
  label,
  value,
  multiline,
}: {
  label: string
  value: string
  multiline?: boolean
}) => (
  <Section style={rowWrap}>
    <Text style={rowLabel}>{label}</Text>
    <Text style={multiline ? rowValueMultiline : rowValue}>{value}</Text>
  </Section>
)

export const template = {
  component: LeadNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Novo lead Fintex BPO — ${data?.nome || 'sem nome'}${data?.empresa ? ` (${data.empresa})` : ''}`,
  to: 'contato@fintexbpo.com.br',
  displayName: 'Notificação de novo lead',
  previewData: {
    nome: 'João Silva',
    empresa: 'Acme Indústria Ltda',
    email: 'joao@acme.com.br',
    whatsapp: '(31) 99999-0000',
    faturamento: 'R$ 1M a 5M / ano',
    desafio: 'Fluxo de caixa desorganizado e dificuldade em fechar o mês.',
    cidade: 'Belo Horizonte/MG',
    segmento: 'Indústria',
    pessoas: '2 pessoas',
    ferramenta: 'Omie',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Inter', Arial, sans-serif",
  margin: 0,
  padding: '32px 0',
}
const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '0 24px',
}
const header = { padding: '0 0 16px' }
const brand = {
  fontSize: '12px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: '#0B1F3A',
  fontWeight: 700,
  margin: '0 0 8px',
}
const h1 = {
  fontFamily: "'Manrope', Arial, sans-serif",
  fontSize: '22px',
  fontWeight: 700,
  color: '#0B1F3A',
  margin: '0 0 8px',
}
const subtitle = {
  fontSize: '14px',
  color: '#4B5563',
  margin: '0 0 8px',
}
const card = {
  backgroundColor: '#F4F7FC',
  borderRadius: '12px',
  padding: '20px 22px',
  margin: '12px 0',
}
const sectionTitle = {
  fontFamily: "'Manrope', Arial, sans-serif",
  fontSize: '13px',
  fontWeight: 700,
  color: '#0B1F3A',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  margin: '0 0 12px',
}
const rowWrap = { margin: '0 0 10px' }
const rowLabel = {
  fontSize: '11px',
  color: '#6B7280',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.06em',
  margin: '0 0 2px',
  fontWeight: 600,
}
const rowValue = {
  fontSize: '14px',
  color: '#0B1F3A',
  margin: 0,
  fontWeight: 500,
}
const rowValueMultiline = {
  ...rowValue,
  whiteSpace: 'pre-wrap' as const,
  lineHeight: '1.5',
}
const hr = { borderColor: '#E5E7EB', margin: '24px 0 16px' }
const footer = {
  fontSize: '12px',
  color: '#6B7280',
  margin: 0,
}
