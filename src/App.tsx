import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  UserCheck, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Utensils, 
  Compass, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Sun, 
  Wind, 
  Droplets, 
  Phone, 
  Mail, 
  Search, 
  ChevronDown, 
  ExternalLink,
  ArrowRight,
  Sliders,
  Layers,
  Award,
  ShoppingBag
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFixtureTab, setSelectedFixtureTab] = useState('live');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [academyModalOpen, setAcademyModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedMembership, setSelectedMembership] = useState('full');
  const [currency, setCurrency] = useState('KES');

  // Trigger toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    const svgFavicon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="0" fill="#000000"/>
        <rect x="0" y="0" width="100" height="28" fill="#0A4225"/>
        <rect x="0" y="28" width="100" height="8" fill="#FFFFFF"/>
        <rect x="0" y="36" width="100" height="28" fill="#C8102E"/>
        <rect x="0" y="64" width="100" height="8" fill="#FFFFFF"/>
        <rect x="0" y="72" width="100" height="28" fill="#000000"/>
        <path d="M25 25 L75 75 M75 25 L25 75" stroke="#C5A059" stroke-width="6" stroke-linecap="square"/>
        <circle cx="50" cy="50" r="16" fill="#0A4225" stroke="#FFFFFF" stroke-width="3"/>
        <path d="M50 38 Q58 50 50 62 Q42 50 50 38 Z" fill="#C8102E"/>
      </svg>
    `;
    const blob = new Blob([svgFavicon], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = url;
  }, []);

  const liveMatchData = {
    league: "ACA Africa T20 Cup - Group A",
    venue: "Main Oval, Nairobi Gymkhana Club Grounds",
    status: "LIVE - 2nd Innings",
    teamA: { name: "Kenya National XI", score: "186/5", overs: "20.0" },
    teamB: { name: "Uganda Cranes XI", score: "128/6", overs: "15.4" },
    summary: "Uganda require 59 runs from 26 balls. Required Run Rate: 13.61. Current Run Rate: 8.17."
  };

  const fixtures = [
    {
      id: 1,
      day: "24",
      month: "OCTOBER",
      match: "KENYA V UGANDA",
      competition: "ACA AFRICA T20 CUP",
      dateRange: "Saturday 24 October - Sunday 25 October 2026",
      venue: "Nairobi Gymkhana Ground, Parklands",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
      ticketsStatus: "Tickets Available"
    },
    {
      id: 2,
      day: "15",
      month: "NOVEMBER",
      match: "CCK XI V SWAMIBAPA",
      competition: "NPCL SUPER LEAGUE 2026",
      dateRange: "Sunday 15 November 2026",
      venue: "Simba Union Ground, Forest Road",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800",
      ticketsStatus: "Members Priority"
    },
    {
      id: 3,
      day: "02",
      month: "DECEMBER",
      match: "KENYA V ZIMBABWE",
      competition: "AFRICA REGIONAL FINAL",
      dateRange: "Wednesday 02 December - Saturday 05 December 2026",
      venue: "Main Oval, CCK Parklands",
      image: "https://images.unsplash.com/photo-1593341646782-e0be1bc04fa9?auto=format&fit=crop&q=80&w=800",
      ticketsStatus: "Selling Fast"
    },
    {
      id: 4,
      day: "14",
      month: "JANUARY",
      match: "KENYA U19 V TANZANIA U19",
      competition: "YOUTH DEVELOPMENT SERIES",
      dateRange: "Thursday 14 January - Sunday 17 January 2027",
      venue: "CCK Academy Grounds",
      image: "https://images.unsplash.com/photo-1624526267942-ab0f0b18121d?auto=format&fit=crop&q=80&w=800",
      ticketsStatus: "Free Entry"
    },
    {
      id: 5,
      day: "20",
      month: "FEBRUARY",
      match: "CCK V MCC TOURING XI",
      competition: "HERITAGE TEST MATCH",
      dateRange: "Saturday 20 February - Tuesday 23 February 2027",
      venue: "Main Oval, CCK Parklands",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      ticketsStatus: "Members Only"
    }
  ];

  const recentResults = [
    {
      id: 101,
      date: "20 SEP 2026",
      competition: "NPCL Super League",
      match: "CCK First XI vs Swamibapa Sports Club",
      result: "CCK won by 38 runs",
      scores: "CCK 274/8 (50.0) | Swamibapa 236/10 (45.1)"
    },
    {
      id: 102,
      date: "13 SEP 2026",
      competition: "East Africa T20 Trophy",
      match: "Kenya XI vs Tanzania XI",
      result: "Kenya won by 7 wickets",
      scores: "Tanzania 135/9 (20.0) | Kenya 138/3 (16.4)"
    }
  ];

  const facilities = [
    {
      id: 'main-oval',
      title: 'International Main Oval Pitch',
      sub: 'ICC Accredited Natural Clay Block',
      desc: 'Featuring a 9-strip natural clay block maintained to international standards, flanked by a 75-meter boundary and fast natural turf outfield.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'hpc-nets',
      title: 'High-Performance Net Complex',
      sub: 'Climate-Controlled Turf & Matting Lanes',
      desc: '6 full-length training lanes equipped with automated Merlyn spin and pace bowling machines, high-speed camera tracking, and turf bounce calibration.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'pavilion-dining',
      title: 'The Members Pavilion & Long Room',
      sub: 'Historic Hospitality & Fine Dining',
      desc: 'The official clubhouse serving traditional matchday teas, executive lunches, and private dining framed by archival honors boards and historic photos.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const membershipTiers = [
    {
      id: 'patron',
      title: 'Pavilion Patron & Fellow',
      feeKES: 'KES 250,000 / yr',
      feeGBP: '£ 1,550 / yr',
      badge: 'Honorary & Executive',
      features: [
        'Full Voting Rights at the Annual General Meeting',
        'Guaranteed Seat in the Pavilion Long Room Bar',
        'Complimentary Guest Passes for all NPCL & International Matches',
        'Reciprocal Privileges with MCC (Lord\'s), Surrey CCC & SCG',
        'Priority Box Allocation for International Fixtures'
      ]
    },
    {
      id: 'full',
      title: 'Full Senior Playing Member',
      feeKES: 'KES 85,000 / yr',
      feeGBP: '£ 530 / yr',
      badge: 'Active League Player',
      features: [
        'Selection Eligibility for NPCL 1st & 2nd Division Squads',
        'Unlimited Access to High Performance Net Lanes',
        'Full Access to Pavilion Gym & Aquatic Facilities',
        'Discounted Rates on Personal High Performance Coaching',
        'Voting Rights after 2 Consecutive Years of Standing'
      ]
    },
    {
      id: 'overseas',
      title: 'Overseas Associate Member',
      feeKES: 'KES 45,000 / yr',
      feeGBP: '£ 280 / yr',
      badge: 'International Affiliates',
      features: [
        'Clubhouse & Dining Entry on Up to 30 Visits Annually',
        'Reciprocal Guest Passes for Pavilion Dining',
        'Annual CCK Heritage Gazette & Match Program Delivery',
        'Priority Ticket Reservation for Visiting International Tours'
      ]
    },
    {
      id: 'junior',
      title: 'Junior Academy Scholar (U18)',
      feeKES: 'KES 30,000 / yr',
      feeGBP: '£ 185 / yr',
      badge: 'Youth & Pathway',
      features: [
        'Entry into Weekend Academy Training & Skill Modules',
        'Match Fees Covered for All Junior League Fixtures',
        'Official CCK Playing Whites & Training Kit Bundle',
        'Supervised Athletic Strength & Conditioning Sessions'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F0] text-[#111111] font-sans antialiased selection:bg-[#0A4225] selection:text-white">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#000000] text-white px-5 py-4 shadow-2xl border-l-4 border-[#C8102E] flex items-center gap-3 transition-all">
          <CheckCircle className="w-5 h-5 text-[#0A4225]" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-4 text-gray-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Bar - Live Ticker & Weather */}
      <div className="bg-[#000000] text-white text-xs py-2 px-4 border-b-2 border-[#C8102E]">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C8102E]" /> Parklands, Nairobi:
            </span>
            <span className="flex items-center gap-1 font-mono text-white">
              <Sun className="w-3.5 h-3.5 text-[#C5A059]" /> 25°C Clear
            </span>
            <span className="hidden sm:flex items-center gap-1 text-gray-400">
              <Wind className="w-3.5 h-3.5" /> 11 km/h ENE
            </span>
            <span className="hidden sm:flex items-center gap-1 text-gray-400">
              <Droplets className="w-3.5 h-3.5" /> 52% Humidity
            </span>
          </div>

          <div className="flex items-center gap-3 bg-[#0A4225] px-3 py-1 border border-[#C5A059]">
            <span className="inline-block w-2 h-2 bg-[#C8102E] animate-pulse"></span>
            <span className="font-semibold text-white uppercase tracking-wider text-[10px]">ACA Africa Cup</span>
            <span className="text-gray-100 truncate max-w-xs md:max-w-none font-mono">
              KEN 186/5 (20.0) v UGA 128/6 (15.4)
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <button onClick={() => setActiveTab('membership')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" /> Member Portal
            </button>
            <span className="text-gray-700">|</span>
            <button onClick={() => setBookingModalOpen(true)} className="hover:text-[#C5A059] transition-colors">
              Ground Booking
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b-2 border-[#0A4225] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Club Crest & Title */}
            <div 
              onClick={() => setActiveTab('home')} 
              className="flex items-center gap-4 cursor-pointer group py-3"
            >
              <div className="w-12 h-15 bg-[#000000] border-2 border-[#C5A059] flex flex-col items-center justify-center relative p-1 shadow-md transition-transform group-hover:scale-105">
                <div className="w-full h-2 bg-[#0A4225]"></div>
                <div className="w-full h-0.5 bg-[#FFFFFF]"></div>
                <div className="w-full h-2 bg-[#C8102E]"></div>
                <div className="w-full h-0.5 bg-[#FFFFFF]"></div>
                <div className="w-full h-2 bg-[#000000]"></div>
                <span className="text-white font-serif font-bold text-xs tracking-tighter mt-1">CCK</span>
                <span className="text-[7px] text-[#C5A059] tracking-widest font-mono">1928</span>
              </div>
              <div>
                <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#000000] group-hover:text-[#0A4225] transition-colors">
                  CRICKET CLUB KENYA
                </h1>
                <p className="text-[10px] tracking-widest uppercase text-[#C8102E] font-bold">
                  Nairobi • Official Ground & Pavilion
                </p>
              </div>
            </div>

            {/* Navigation Bar */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'fixtures', label: 'Matches & Scores' },
                { id: 'facilities', label: 'Ground & Facilities' },
                { id: 'academy', label: 'Academy & Pathway' },
                { id: 'membership', label: 'Membership Tiers' },
                { id: 'shop', label: 'Official Kit Shop' },
                { id: 'club', label: 'History & Archives' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-4 ${
                    activeTab === item.id 
                      ? 'border-[#C8102E] text-[#0A4225] bg-gray-50' 
                      : 'border-transparent text-gray-800 hover:text-[#0A4225] hover:border-[#0A4225]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Action Callout */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAcademyModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center bg-[#C8102E] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#a60d26] transition-all border border-[#8a0a1f] shadow-sm"
              >
                Youth Player Entry
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic View Routing */}
      <main>
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab} 
            facilities={facilities} 
            fixtures={fixtures}
            liveMatchData={liveMatchData}
            setAcademyModalOpen={setAcademyModalOpen}
            setBookingModalOpen={setBookingModalOpen}
            setSelectedFacility={setSelectedFacility}
          />
        )}

        {activeTab === 'fixtures' && (
          <FixturesPage 
            fixtures={fixtures} 
            recentResults={recentResults}
            liveMatchData={liveMatchData}
            selectedFixtureTab={selectedFixtureTab}
            setSelectedFixtureTab={setSelectedFixtureTab}
            triggerToast={triggerToast}
          />
        )}

        {activeTab === 'facilities' && (
          <FacilitiesPage 
            facilities={facilities} 
            setBookingModalOpen={setBookingModalOpen} 
          />
        )}

        {activeTab === 'academy' && (
          <AcademyPage setAcademyModalOpen={setAcademyModalOpen} />
        )}

        {activeTab === 'membership' && (
          <MembershipPage 
            membershipTiers={membershipTiers} 
            currency={currency} 
            setCurrency={setCurrency}
            setSelectedMembership={setSelectedMembership}
            triggerToast={triggerToast}
          />
        )}

        {activeTab === 'shop' && <KitShopPage triggerToast={triggerToast} />}
        {activeTab === 'club' && <HeritageClubPage setBookingModalOpen={setBookingModalOpen} />}
        {activeTab === 'privacy' && <PrivacyPolicyPage />}
        {activeTab === 'terms' && <TermsConditionsPage />}
      </main>

      {/* Modal - Ground Rental Request */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full border-t-8 border-[#C8102E] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="font-serif text-2xl font-bold text-[#000000] mb-1">
              Ground & Facility Rental Request
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Official application for corporate tournaments, school match staging, and private net hire.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              setBookingModalOpen(false);
              triggerToast("Facility inquiry submitted. The Secretariat will contact you within 24 hours.");
            }} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">First Name</label>
                  <input required type="text" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#0A4225] focus:ring-1 focus:ring-[#0A4225] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Last Name</label>
                  <input required type="text" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#0A4225] focus:ring-1 focus:ring-[#0A4225] outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Email Address</label>
                  <input required type="email" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#0A4225] focus:ring-1 focus:ring-[#0A4225] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Telephone / WhatsApp</label>
                  <input required type="tel" placeholder="+254 7..." className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#0A4225] focus:ring-1 focus:ring-[#0A4225] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Requested Facility</label>
                <select className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#0A4225] focus:ring-1 focus:ring-[#0A4225] outline-none">
                  <option>Main Oval Turf (Full Day Match)</option>
                  <option>High Performance Indoor Net Lanes (Hourly)</option>
                  <option>Members Pavilion & Dining Hall (Private Function)</option>
                  <option>Committee Boardroom</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Preferred Date</label>
                <input required type="date" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#0A4225] focus:ring-1 focus:ring-[#0A4225] outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Match Details & Requirements</label>
                <textarea rows="3" placeholder="Specify expected team numbers, umpiring needs, or catering arrangements..." className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#0A4225] focus:ring-1 focus:ring-[#0A4225] outline-none"></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#0A4225] text-white py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#00301a] transition-colors border border-[#002212]">
                  Submit Official Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal - Academy Registration */}
      {academyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full border-t-8 border-[#0A4225] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setAcademyModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="font-serif text-2xl font-bold text-[#000000] mb-1">
              Youth Academy Registration 2026
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Official player pathway application for Under-11, Under-15, and Under-19 development squads.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              setAcademyModalOpen(false);
              triggerToast("Academy registration received. Assessment session details sent to email.");
            }} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Player's Full Name</label>
                <input required type="text" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Date of Birth</label>
                  <input required type="date" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Primary Discipline</label>
                  <select className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none">
                    <option>Top-order Batter</option>
                    <option>Fast / Seam Bowler</option>
                    <option>Spin Bowler</option>
                    <option>Wicketkeeper-Batter</option>
                    <option>All-rounder</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Parent / Guardian Name</label>
                  <input required type="text" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Contact Email</label>
                  <input required type="email" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">School or Previous Club</label>
                <input type="text" placeholder="e.g. Nairobi School XI, Rift Valley Academy" className="w-full px-3 py-2 border border-gray-300 text-sm focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] outline-none" />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#C8102E] text-white py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#a60d26] transition-colors border border-[#8a0a1f]">
                  Submit Application for Assessment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Global Footer */}
      <footer className="bg-[#000000] text-white border-t-8 border-[#0A4225] mt-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-10 bg-[#000000] border border-[#C5A059] flex flex-col items-center justify-center p-0.5">
                  <div className="w-full h-1 bg-[#0A4225]"></div>
                  <div className="w-full h-0.5 bg-[#FFFFFF]"></div>
                  <div className="w-full h-1 bg-[#C8102E]"></div>
                  <div className="w-full h-0.5 bg-[#FFFFFF]"></div>
                  <div className="w-full h-1 bg-[#000000]"></div>
                </div>
                <span className="font-serif text-lg font-bold text-white tracking-tight">CRICKET CLUB KENYA</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Founded in 1928, Cricket Club Kenya is the premier guardian of cricket standards, international touring fixtures, and elite youth player pathways in East Africa.
              </p>
              <div className="text-xs text-[#C5A059] font-mono">
                Parklands / Forest Road, Nairobi, Kenya
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xs font-bold tracking-widest text-[#C8102E] uppercase mb-4">Navigational Links</h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li><button onClick={() => setActiveTab('club')} className="hover:text-white transition-colors">History & Long Room</button></li>
                <li><button onClick={() => setActiveTab('fixtures')} className="hover:text-white transition-colors">Match Scorecards & Schedule</button></li>
                <li><button onClick={() => setActiveTab('facilities')} className="hover:text-white transition-colors">Ground Facilities & Pitch</button></li>
                <li><button onClick={() => setActiveTab('membership')} className="hover:text-white transition-colors">Membership Nominations</button></li>
                <li><button onClick={() => setActiveTab('shop')} className="hover:text-white transition-colors">Official National Kit Shop</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xs font-bold tracking-widest text-[#C8102E] uppercase mb-4">Secretariat Address</h4>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0A4225]" /> +254 (0) 20 231 4455
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0A4225]" /> secretariat@cricketclubkenya.co.ke
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8102E]" /> Club Lane, Parklands, Nairobi
                </li>
                <li className="text-gray-400 pt-1 font-mono text-[11px]">
                  Hours: Mon - Sat, 08:30 - 17:00 EAT
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xs font-bold tracking-widest text-[#C8102E] uppercase mb-4">Governance & Affiliations</h4>
              <p className="text-xs text-gray-400 mb-3">
                Fully affiliated with Cricket Kenya (CK) and recognized by the African Cricket Association (ACA).
              </p>
              <div className="p-3 bg-[#111111] border border-gray-800 text-[11px] text-gray-300 border-l-2 border-l-[#C5A059]">
                Reciprocal dining & pavilion arrangements with Lord's (MCC), Surrey CCC (Oval), and Sydney Cricket Ground.
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div>
              © 1928 - 2026 Cricket Club Kenya. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={() => setActiveTab('privacy')} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <span className="text-gray-700">•</span>
              <button onClick={() => setActiveTab('terms')} className="hover:text-white transition-colors">
                Terms & Conditions
              </button>
              <span className="text-gray-700">•</span>
              <button onClick={() => setActiveTab('club')} className="hover:text-white transition-colors">
                Pavilion Regulations
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function HomePage({ setActiveTab, facilities, fixtures, liveMatchData, setAcademyModalOpen, setBookingModalOpen }) {
  return (
    <div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Editorial Hero Banner */}
      <section className="relative bg-[#000000] text-white py-20 lg:py-28 overflow-hidden border-b-8 border-[#0A4225]">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1600')` }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0A4225] border border-[#C5A059] px-3 py-1 text-xs text-white font-mono tracking-wider uppercase font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" /> Guardian of Kenyan Cricket Heritage Since 1928
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Prestige, Tradition, and High Performance.
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans">
              Welcome to Cricket Club Kenya. Host to international fixtures, domestic championships, and the primary athletic pathway for future national players in Nairobi.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => setActiveTab('fixtures')}
                className="bg-[#C8102E] text-white px-6 py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-[#a60d26] transition-colors border border-[#8a0a1f] flex items-center gap-2 shadow-lg"
              >
                Match Center & Live Scores <ChevronRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => setActiveTab('membership')}
                className="bg-[#0A4225] text-white px-6 py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-[#00301a] transition-colors border border-[#C5A059] flex items-center gap-2"
              >
                Nomination for Membership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Match Scorecard Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white border-2 border-[#000000] shadow-2xl p-6 md:p-8 border-l-8 border-l-[#C8102E]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="bg-[#C8102E] text-white text-[10px] uppercase font-bold px-2 py-0.5 tracking-widest">
                  Live Match
                </span>
                <span className="text-xs font-bold text-[#0A4225] uppercase tracking-wider">{liveMatchData.league}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#000000]">
                {liveMatchData.teamA.name} vs {liveMatchData.teamB.name}
              </h3>
              <p className="text-xs text-gray-600 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" /> {liveMatchData.venue}
              </p>
            </div>

            <div className="bg-[#F4F5F0] p-4 border border-gray-300 flex items-center gap-8">
              <div>
                <div className="text-xs text-gray-600 font-bold">{liveMatchData.teamA.name}</div>
                <div className="text-xl font-mono font-bold text-[#0A4225]">{liveMatchData.teamA.score} <span className="text-xs text-gray-500 font-normal">({liveMatchData.teamA.overs} ov)</span></div>
              </div>
              <div className="text-gray-400 font-serif italic text-sm">vs</div>
              <div>
                <div className="text-xs text-gray-600 font-bold">{liveMatchData.teamB.name}</div>
                <div className="text-xl font-mono font-bold text-[#C8102E]">{liveMatchData.teamB.score} <span className="text-xs text-gray-500 font-normal">({liveMatchData.teamB.overs} ov)</span></div>
              </div>
            </div>

            <div>
              <button 
                onClick={() => setActiveTab('fixtures')}
                className="w-full md:w-auto bg-[#000000] text-white px-5 py-3 text-xs uppercase tracking-wider font-bold hover:bg-[#0A4225] transition-colors border border-black"
              >
                Full Match Scorecard
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Fixtures Carousel Section (Matching Image Reference Layout) */}
      <section className="py-16 bg-[#F4F5F0] border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">Schedule & Tickets</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#000000]">Upcoming Fixtures at the Oval</h2>
            </div>
            <span className="hidden sm:block text-xs font-mono text-gray-500">Scroll right to explore →</span>
          </div>
        </div>

        {/* Carousel Row */}
        <div className="w-full relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 lg:px-8 hide-scrollbar">
            {fixtures.map((match) => (
              <div 
                key={match.id}
                onClick={() => setActiveTab('fixtures')}
                className="min-w-[280px] w-[80vw] md:min-w-[320px] md:w-[320px] h-[480px] relative shrink-0 snap-start bg-[#000000] overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#C5A059] transition-all"
              >
                {/* Background Image */}
                <img 
                  src={match.image} 
                  alt={match.match}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />

                {/* Top and Bottom Dark Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent h-1/3"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                {/* Top Left: Date Block */}
                <div className="absolute top-6 left-6 text-white flex flex-col items-start">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-gray-300">STARTS</span>
                  <span className="text-5xl font-black font-sans leading-none my-1 tracking-tighter text-white">{match.day}</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-gray-300">{match.month}</span>
                </div>

                {/* Bottom Content Block */}
                <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col items-start">
                  <h3 className="text-2xl font-black uppercase leading-tight mb-2 font-sans tracking-tight text-white group-hover:text-[#C5A059] transition-colors">
                    {match.match}
                  </h3>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white bg-[#0A4225] px-2 py-1 mb-2 border border-black inline-block">
                    {match.competition}
                  </p>
                  <p className="text-xs font-sans text-gray-300 leading-snug">
                    {match.dateRange}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Action Button */}
          <div className="flex justify-center mt-10 px-4">
            <button 
              onClick={() => setActiveTab('fixtures')}
              className="bg-[#000000] text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#0A4225] transition-colors flex items-center gap-2 border border-black shadow-md"
            >
              VIEW ALL FIXTURES <ChevronRight className="w-4 h-4 text-[#C8102E]" />
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">World Class Infrastructure</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000] mt-2">Historic Grounds & High Performance Facilities</h2>
            <div className="w-16 h-1 bg-[#0A4225] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((fac) => (
              <div key={fac.id} className="bg-[#F4F5F0] border border-gray-300 flex flex-col group hover:border-[#0A4225] transition-colors">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-[#000000] text-[#C5A059] text-[10px] uppercase font-bold tracking-wider px-2 py-1">
                    CCK Standard
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#000000]">{fac.title}</h3>
                    <p className="text-xs text-[#0A4225] font-bold uppercase tracking-wider mt-1">{fac.sub}</p>
                    <p className="text-xs text-gray-600 mt-3 leading-relaxed">{fac.desc}</p>
                  </div>
                  <button 
                    onClick={() => setBookingModalOpen(true)}
                    className="w-full bg-white text-[#000000] hover:bg-[#000000] hover:text-white py-2.5 text-xs font-bold uppercase tracking-wider border border-gray-400 transition-colors"
                  >
                    Inquire Hire Rates
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Academy Callout Section */}
      <section className="bg-[#0A4225] text-white py-16 border-y-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">Under-11 to Under-19 Pathways</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">Nurturing the Next Generation of National Talent</h2>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                Cricket Club Kenya’s High-Performance Academy provides elite technical coaching, athletic conditioning, and competitive league matchplay for aspiring junior cricketers across East Africa.
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => setAcademyModalOpen(true)}
                  className="bg-[#C8102E] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#a60d26] transition-colors border border-[#8a0a1f]"
                >
                  Register Youth Player for Trials
                </button>
              </div>
            </div>
            <div className="border-4 border-white shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000" 
                alt="Academy Coaching" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FixturesPage({ fixtures, recentResults, liveMatchData, selectedFixtureTab, setSelectedFixtureTab, triggerToast }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">Match Center & Results</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000]">Official Fixture Calendar</h1>
        <p className="text-xs text-gray-600 mt-2">
          Comprehensive match schedule for International tours, NPCL Super League fixtures, and official CCK representative matches.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b-2 border-gray-300 mb-8">
        {[
          { id: 'live', label: 'Live Match' },
          { id: 'upcoming', label: 'Upcoming Fixtures' },
          { id: 'results', label: 'Recent Results' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFixtureTab(tab.id)}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-4 -mb-[2px] ${
              selectedFixtureTab === tab.id
                ? 'border-[#C8102E] text-[#0A4225] bg-white'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {selectedFixtureTab === 'live' && (
        <div className="bg-white border border-gray-300 p-8 shadow-md border-t-4 border-t-[#C8102E] space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <span className="bg-[#C8102E] text-white text-[10px] uppercase font-bold px-2 py-0.5 tracking-widest">
                IN PROGRESS
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#000000] mt-2">{liveMatchData.league}</h2>
              <p className="text-xs text-gray-600 mt-1">{liveMatchData.venue}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#0A4225] font-bold font-mono uppercase">{liveMatchData.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F4F5F0] p-6 border border-gray-200">
            <div className="border-r border-gray-300 pr-4">
              <div className="text-xs font-bold text-gray-500 uppercase">{liveMatchData.teamA.name}</div>
              <div className="text-3xl font-mono font-bold text-[#0A4225] my-2">{liveMatchData.teamA.score}</div>
              <div className="text-xs text-gray-600">Overs: {liveMatchData.teamA.overs}</div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase">{liveMatchData.teamB.name}</div>
              <div className="text-3xl font-mono font-bold text-[#C8102E] my-2">{liveMatchData.teamB.score}</div>
              <div className="text-xs text-gray-600">Overs: {liveMatchData.teamB.overs}</div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-l-4 border-[#0A4225] text-xs text-gray-800 font-mono">
            <strong>Match Equation:</strong> {liveMatchData.summary}
          </div>
        </div>
      )}

      {selectedFixtureTab === 'upcoming' && (
        <div className="space-y-4">
          {fixtures.map((f) => (
            <div key={f.id} className="bg-white border border-gray-300 p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#0A4225] transition-colors">
              <div className="flex items-center gap-6">
                <div className="bg-[#000000] text-white p-4 text-center min-w-[100px] border-b-4 border-[#C8102E]">
                  <div className="text-2xl font-bold font-sans">{f.day}</div>
                  <div className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase">{f.month}</div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#0A4225] uppercase tracking-wider">{f.competition}</span>
                  <h3 className="font-serif text-xl font-bold text-[#000000]">{f.match}</h3>
                  <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" /> {f.venue}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase px-3 py-1 bg-gray-100 border">{f.ticketsStatus}</span>
                <button 
                  onClick={() => triggerToast(`Ticket inquiry registered for ${f.match}. Secretariat will confirm availability.`)}
                  className="bg-[#0A4225] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#00301a] transition-colors border border-[#002212]"
                >
                  Reserve Pass
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedFixtureTab === 'results' && (
        <div className="space-y-4">
          {recentResults.map((r) => (
            <div key={r.id} className="bg-white border border-gray-300 p-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>{r.competition} • {r.date}</span>
                <span className="font-bold text-[#0A4225]">{r.result}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#000000]">{r.match}</h3>
              <p className="text-xs font-mono bg-[#F4F5F0] p-3 text-gray-800 border">{r.scores}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FacilitiesPage({ facilities, setBookingModalOpen }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">Venue & Grounds</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000]">Ground Facilities & Hire</h1>
        <p className="text-xs text-gray-600 mt-2">
          Host to ICC international matches, corporate championships, and elite training camps in Parklands, Nairobi.
        </p>
      </div>

      <div className="space-y-12">
        {facilities.map((f, idx) => (
          <div key={f.id} className={`bg-white border border-gray-300 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
            <div className={`h-80 md:h-auto overflow-hidden ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
              <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center space-y-4">
              <span className="text-xs font-bold text-[#0A4225] uppercase tracking-wider">{f.sub}</span>
              <h2 className="font-serif text-2xl font-bold text-[#000000]">{f.title}</h2>
              <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              <div className="pt-2">
                <button 
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-[#000000] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#0A4225] transition-colors border border-black"
                >
                  Submit Booking Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AcademyPage({ setAcademyModalOpen }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">Youth Pathway</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000]">Cricket Club Kenya Academy</h1>
        <p className="text-xs text-gray-600 mt-2">
          Structured athletic development modules for age-groups Under-11, Under-15, and Under-19 led by ICC Certified High Performance Coaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { age: 'Under-11 Pathway', title: 'Fundamentals & Technical Skills', desc: 'Grip, stance, basic bowling actions, and movement coordination in safe turf environments.' },
          { age: 'Under-15 Pathway', title: 'Tactical Matchplay & Conditioning', desc: 'Game awareness, spin & seam strategy, athletic strength, and junior league match schedules.' },
          { age: 'Under-19 Pathway', title: 'Senior First XI Transition', desc: 'High-speed bowling machine drills, tactical video analysis, and pathway integration into senior division leagues.' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 border border-gray-300 border-t-4 border-t-[#0A4225] space-y-3">
            <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{item.age}</span>
            <h3 className="font-serif text-xl font-bold text-[#000000]">{item.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#000000] text-white p-8 md:p-12 text-center max-w-2xl mx-auto border-t-8 border-[#C8102E]">
        <h2 className="font-serif text-2xl font-bold mb-3">Enroll for 2026 Season Assessments</h2>
        <p className="text-xs text-gray-300 mb-6 leading-relaxed">
          Weekly sessions held every Saturday and Sunday morning at the CCK High-Performance Net Complex.
        </p>
        <button 
          onClick={() => setAcademyModalOpen(true)}
          className="bg-[#C8102E] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#a60d26] transition-colors border border-[#8a0a1f]"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}

function MembershipPage({ membershipTiers, currency, setCurrency, setSelectedMembership, triggerToast }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">Nomination & Privileges</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000]">Club Membership Tiers</h1>
          <p className="text-xs text-gray-600 mt-2">
            Subject to Committee approval, proposer backing, and adherence to Pavilion guidelines.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="bg-white border border-gray-300 p-1 inline-flex items-center">
          <button 
            onClick={() => setCurrency('KES')} 
            className={`px-4 py-1.5 text-xs font-bold ${currency === 'KES' ? 'bg-[#0A4225] text-white' : 'text-gray-700'}`}
          >
            KES (Shilling)
          </button>
          <button 
            onClick={() => setCurrency('GBP')} 
            className={`px-4 py-1.5 text-xs font-bold ${currency === 'GBP' ? 'bg-[#0A4225] text-white' : 'text-gray-700'}`}
          >
            GBP (£)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {membershipTiers.map((tier) => (
          <div key={tier.id} className="bg-white border border-gray-300 p-6 flex flex-col justify-between hover:border-[#0A4225] transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#C8102E] bg-gray-100 uppercase tracking-widest px-2 py-1 border inline-block">
                {tier.badge}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#000000]">{tier.title}</h3>
              <div className="text-lg font-mono font-bold text-[#0A4225] border-b pb-3">
                {currency === 'KES' ? tier.feeKES : tier.feeGBP}
              </div>
              <ul className="space-y-2 text-xs text-gray-600">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0A4225] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => {
                  setSelectedMembership(tier.id);
                  triggerToast(`Nomination form for ${tier.title} dispatched to your browser download.`);
                }}
                className="w-full bg-[#000000] text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#0A4225] transition-colors border border-black"
              >
                Request Nomination
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KitShopPage({ triggerToast }) {
  const shopItems = [
    {
      id: 1,
      title: 'Kenya Official Match Jersey 2026',
      price: 'KES 6,500 / £40',
      tag: 'National Team Wear',
      desc: 'Authentic moisture-wicking green and red match jersey featuring embroidered CCK crest.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'CCK Official Green Cap',
      price: 'KES 2,500 / £15',
      tag: 'Headwear',
      desc: 'Traditional wool-blend green playing cap with gold bullion CCK emblem.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Pavilion Long Room Cable Sweater',
      price: 'KES 9,800 / £60',
      tag: 'Knitwear',
      desc: 'Classic cream cable-knit sweater with green and red striped neckline border.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">Merchandise</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000]">Official National Kit & Pavilion Wear</h1>
        <p className="text-xs text-gray-600 mt-2">
          Official playing equipment and executive apparel authorized by Cricket Club Kenya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {shopItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-300 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-64 overflow-hidden border">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold text-[#0A4225] uppercase tracking-wider">{item.tag}</span>
              <h3 className="font-serif text-xl font-bold text-[#000000]">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
              <div className="text-base font-mono font-bold text-[#C8102E]">{item.price}</div>
            </div>
            <div className="pt-4">
              <button 
                onClick={() => triggerToast(`Added ${item.title} to order bag.`)}
                className="w-full bg-[#0A4225] text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#00301a] transition-colors border border-[#002212] flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Order Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeritageClubPage({ setBookingModalOpen }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="text-xs font-bold text-[#C8102E] tracking-widest uppercase">History & Archives</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#000000]">Nearly a Century of Cricket Excellence</h1>
        <p className="text-xs text-gray-600 leading-relaxed">
          Established in 1928 in Parklands, Cricket Club Kenya has served as the administrative and competitive heartland for East African cricket.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 border border-gray-300">
        <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
          <h2 className="font-serif text-xl font-bold text-[#000000]">The Long Room & Archival Collections</h2>
          <p>
            The CCK Pavilion houses historic honors boards detailing every international centurion and 5-wicket haul achieved on Kenyan soil. 
          </p>
          <p>
            From hosting visiting test-touring sides in the mid-20th century to the heroic 1996 and 2003 World Cup campaigns, CCK stands as the standard-bearer for sportsmanship in Nairobi.
          </p>
        </div>
        <div className="border-4 border-[#0A4225] p-6 bg-[#F4F5F0] space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#000000]">Reciprocal Club Affiliations</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Full Members in good standing enjoy reciprocal dining and matchday entry privileges at partner international clubs:
          </p>
          <ul className="text-xs font-mono space-y-1 text-[#0A4225]">
            <li>• Marylebone Cricket Club (Lord's, London)</li>
            <li>• Surrey County Cricket Club (The Oval, London)</li>
            <li>• Sydney Cricket Ground (SCG, Sydney)</li>
            <li>• Singapore Cricket Club (SCC, Padang)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white my-8 border border-gray-300 text-xs text-gray-700 space-y-6">
      <h1 className="font-serif text-3xl font-bold text-[#000000]">Privacy Policy</h1>
      <p className="font-mono text-gray-500">Last updated: September 2026</p>

      <section className="space-y-2">
        <h2 className="font-serif text-lg font-bold text-[#000000]">1. Data Collection & Usage</h2>
        <p>
          Cricket Club Kenya (CCK) collects personal details provided through membership applications, ground rental inquiries, and academy registrations solely for administrative purposes.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-serif text-lg font-bold text-[#000000]">2. Information Protection</h2>
        <p>
          Your personal details are stored securely in compliance with the Kenya Data Protection Act 2019 and will never be distributed to third parties without express consent.
        </p>
      </section>
    </div>
  );
}

function TermsConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white my-8 border border-gray-300 text-xs text-gray-700 space-y-6">
      <h1 className="font-serif text-3xl font-bold text-[#000000]">Terms & Conditions</h1>
      <p className="font-mono text-gray-500">Last updated: September 2026</p>

      <section className="space-y-2">
        <h2 className="font-serif text-lg font-bold text-[#000000]">1. Ground & Pavilion Conduct</h2>
        <p>
          All members, players, and visiting guests must adhere to the CCK Dress Code and Pavilion Guidelines. Proper cricket attire is required on the turf at all times.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-serif text-lg font-bold text-[#000000]">2. Ground Hire Bookings</h2>
        <p>
          Facility reservations are subject to pitch assessment and weather conditions. The Secretariat reserves the right to reschedule play to protect pitch integrity.
        </p>
      </section>
    </div>
  );
}
