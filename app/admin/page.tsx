"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, DollarSign, TrendingUp, MapPin, Plane, MessageSquare, Settings, LogOut, BarChart3, FileText } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminEmail, setAdminEmail] = useState("")

  useEffect(() => {
    // Check if user is authenticated
    const authenticated = localStorage.getItem("admin_authenticated")
    const email = localStorage.getItem("admin_email")

    if (authenticated === "true" && email) {
      setIsAuthenticated(true)
      setAdminEmail(email)
    } else {
      router.push("/admin-login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated")
    localStorage.removeItem("admin_email")
    router.push("/admin-login")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-mist">
      <Navigation />

      {/* Admin Header */}
      <div className="bg-blue-season text-white py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-display font-bold">Admin Dashboard</h1>
              <p className="text-white/75 mt-1">Welcome back, {adminEmail}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-season"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Bookings</p>
                  <p className="text-3xl font-bold text-blue-season">234</p>
                  <p className="text-xs text-island mt-1">+12% from last month</p>
                </div>
                <div className="w-12 h-12 bg-blue-season/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-season" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-3xl font-bold text-blue-season">$45,678</p>
                  <p className="text-xs text-island mt-1">+8% from last month</p>
                </div>
                <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-golden" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Tours</p>
                  <p className="text-3xl font-bold text-blue-season">18</p>
                  <p className="text-xs text-ocean mt-1">3 scheduled today</p>
                </div>
                <div className="w-12 h-12 bg-aqua/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-ocean" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">New Customers</p>
                  <p className="text-3xl font-bold text-blue-season">89</p>
                  <p className="text-xs text-island mt-1">+24% from last month</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recent Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Smith", tour: "Safari Blue", date: "2024-01-15", amount: "$120" },
                  { name: "Maria Garcia", tour: "Spice Farm Tour", date: "2024-01-14", amount: "$50" },
                  { name: "David Chen", tour: "Stone Town Walking", date: "2024-01-14", amount: "$45" },
                  { name: "Emma Wilson", tour: "Dolphin Tour", date: "2024-01-13", amount: "$80" },
                  { name: "Ahmed Hassan", tour: "Jozani Forest", date: "2024-01-13", amount: "$60" },
                ].map((booking, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div>
                      <p className="font-semibold text-blue-season">{booking.name}</p>
                      <p className="text-sm text-muted-foreground">{booking.tour}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-ocean">{booking.amount}</p>
                      <p className="text-xs text-muted-foreground">{booking.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Customers
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Plane className="w-4 h-4 mr-2" />
                  Tour Packages
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Reports
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Tours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Most Popular Tours This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Safari Blue Trip", bookings: 45, revenue: "$5,400" },
                { name: "Spice Farm Tour", bookings: 38, revenue: "$1,900" },
                { name: "Stone Town Walking", bookings: 32, revenue: "$1,600" },
              ].map((tour, index) => (
                <div key={index} className="p-4 bg-mist rounded-lg">
                  <h4 className="font-semibold text-blue-season mb-2">{tour.name}</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bookings:</span>
                    <span className="font-semibold">{tour.bookings}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Revenue:</span>
                    <span className="font-semibold text-ocean">{tour.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-golden/10 border border-golden/30 rounded-lg">
          <p className="text-sm text-ink/85">
            <strong>Note:</strong> This is a demonstration admin dashboard. All data shown is sample data for display
            purposes only. No actual booking or customer data is being stored or processed.
          </p>
        </div>
      </div>
    </div>
  )
}
