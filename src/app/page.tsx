import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MetricsCard } from "@/components/metrics-card"
import { StatsChart } from "@/components/stats-chart"
import { VaultTable } from "@/components/vault-table"
import { BarChart3, ChevronDown, Globe, Home, LayoutDashboard, LifeBuoy, Settings, Wallet } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r bg-background/50 backdrop-blur">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <Wallet className="h-6 w-6" />
            <span className="font-bold">Clie</span>
          </div>
          <div className="px-4 py-4">
            <Input placeholder="Search" className="bg-background/50" />
          </div>
          <nav className="space-y-2 px-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Clientes
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Globe className="h-4 w-4" />
              Peças
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Serviços
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Wallet className="h-4 w-4" />
              Notas Fiscais
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
          </nav>
        </aside>
        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Visão Geral</h1>
              <div className="text-sm text-muted-foreground">Aug 13, 2023 - Aug 18, 2023</div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricsCard
              title="Seu Saldo"
              value="$74,892"
              change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
            />
            <MetricsCard
              title="Seus Depósitos"
              value="$54,892"
              change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
            />
          </div>
          <div className="mt-6">
            <VaultTable />
          </div>
        </main>
      </div>
    </div>
  )
}
