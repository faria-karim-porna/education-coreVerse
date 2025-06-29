import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Video,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Users,
  MessageSquare,
  Share2,
  Settings,
  MoreVertical,
  Hand,
  X,
  Maximize2,
  Minimize2,
  PanelLeft,
  PanelRight,
  ScreenShare,
  Clock,
  UserPlus,
  Send,
  Download,
  FileText,
  Image,
  Link,
  Smile,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

interface LiveClassroomPageProps {
  onNavigate: (view: string) => void;
}

export function LiveClassroomPage({ onNavigate }: LiveClassroomPageProps) {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [activeTab, setActiveTab] = useState('video');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const participants = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      role: 'Host',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      isMicOn: true,
      isCameraOn: true,
      isScreenSharing: false,
      isHandRaised: false
    },
    {
      id: '2',
      name: 'Alice Johnson',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      isMicOn: false,
      isCameraOn: true,
      isScreenSharing: false,
      isHandRaised: true
    },
    {
      id: '3',
      name: 'James Park',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      isMicOn: false,
      isCameraOn: false,
      isScreenSharing: false,
      isHandRaised: false
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      isMicOn: false,
      isCameraOn: true,
      isScreenSharing: false,
      isHandRaised: false
    },
    {
      id: '5',
      name: 'Emily Watson',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      isMicOn: false,
      isCameraOn: true,
      isScreenSharing: false,
      isHandRaised: false
    }
  ];

  const chatMessages = [
    {
      id: '1',
      sender: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      message: 'Welcome to our virtual classroom! Today we\'ll be discussing quantum mechanics.',
      time: '10:02 AM',
      isHost: true
    },
    {
      id: '2',
      sender: 'Alice Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      message: 'I\'m excited to learn about this topic!',
      time: '10:03 AM',
      isHost: false
    },
    {
      id: '3',
      sender: 'James Park',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      message: 'Will we be covering Schrödinger\'s equation today?',
      time: '10:04 AM',
      isHost: false
    },
    {
      id: '4',
      sender: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      message: 'Yes, James! We\'ll start with the basics and then move on to the equation.',
      time: '10:05 AM',
      isHost: true
    },
    {
      id: '5',
      sender: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      message: 'I\'m having trouble with my audio, can someone help?',
      time: '10:06 AM',
      isHost: false
    },
    {
      id: '6',
      sender: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      message: 'David, try refreshing your browser or checking your audio settings.',
      time: '10:07 AM',
      isHost: true
    }
  ];

  const sendMessage = () => {
    if (chatMessage.trim()) {
      // In a real app, this would send the message to the server
      setChatMessage('');
    }
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
  };

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  const toggleHandRaise = () => {
    setIsHandRaised(!isHandRaised);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleParticipants = () => {
    setIsParticipantsOpen(!isParticipantsOpen);
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setRecordingTime(0);
    } else {
      setIsRecording(true);
      // In a real app, this would start a timer
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-vh-100 bg-dark d-flex flex-column">
      {/* Top Navigation */}
      <nav className="navbar navbar-dark bg-deep-red shadow-sm">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-white rounded-3 d-flex align-items-center justify-content-center"
                   style={{ width: '32px', height: '32px' }}>
                <BookOpen className="text-primary-red" size={20} />
              </div>
              <span className="fw-bold text-white mb-0">CoreVerse Live</span>
            </motion.button>
            <div className="ms-3 d-flex align-items-center gap-2">
              <span className="badge bg-success text-white">Live</span>
              <span className="text-white-50">|</span>
              <span className="text-white">Advanced Physics - Quantum Mechanics</span>
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-3">
            {isRecording && (
              <div className="d-flex align-items-center gap-2 me-3">
                <div className="bg-danger rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                <span className="text-white">{formatTime(recordingTime)}</span>
              </div>
            )}
            <Button 
              variant="outline-secondary" 
              className="border-white text-white"
              onClick={toggleRecording}
            >
              {isRecording ? 'Stop Recording' : 'Record'}
            </Button>
            <Button 
              variant="secondary" 
              className="bg-white text-primary-red border-white"
              onClick={() => onNavigate('dashboard')}
            >
              <X size={16} className="me-1" />
              Leave
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-fill d-flex">
        {/* Main Video Area */}
        <div className="flex-fill bg-dark p-3 d-flex flex-column">
          {/* Video Display */}
          <div className="flex-fill bg-black rounded-3 position-relative mb-3 d-flex align-items-center justify-content-center">
            {!isCameraOn ? (
              <div className="text-center">
                <div className="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                     style={{ width: '80px', height: '80px' }}>
                  <Camera className="text-white-50" size={40} />
                </div>
                <h5 className="text-white-50">Camera is off</h5>
              </div>
            ) : (
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2" 
                alt="Classroom view" 
                className="img-fluid rounded-3"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            )}
            
            {/* Participant Thumbnails */}
            <div className="position-absolute bottom-0 start-0 end-0 p-3">
              <div className="d-flex gap-2 justify-content-center">
                {participants.slice(0, 4).map((participant) => (
                  <div 
                    key={participant.id} 
                    className="position-relative"
                    style={{ width: '120px', height: '80px' }}
                  >
                    {participant.isCameraOn ? (
                      <img 
                        src={participant.avatar} 
                        alt={participant.name} 
                        className="img-fluid rounded-3 object-fit-cover w-100 h-100"
                      />
                    ) : (
                      <div className="bg-dark d-flex align-items-center justify-content-center rounded-3 w-100 h-100">
                        <Camera className="text-white-50" size={24} />
                      </div>
                    )}
                    <div className="position-absolute bottom-0 start-0 p-1">
                      <span className="badge bg-dark text-white small">{participant.name.split(' ')[0]}</span>
                    </div>
                    <div className="position-absolute top-0 end-0 p-1">
                      {!participant.isMicOn && (
                        <span className="badge bg-danger">
                          <MicOff size={10} />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                {participants.length > 4 && (
                  <div 
                    className="bg-dark d-flex align-items-center justify-content-center rounded-3"
                    style={{ width: '120px', height: '80px' }}
                  >
                    <span className="text-white">+{participants.length - 4} more</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-dark-card-bg rounded-3 p-3">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <Button 
                variant={isMicOn ? 'primary' : 'secondary'} 
                className="rounded-circle p-3"
                onClick={toggleMic}
                style={{ width: '50px', height: '50px' }}
              >
                {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
              </Button>
              <Button 
                variant={isCameraOn ? 'primary' : 'secondary'} 
                className="rounded-circle p-3"
                onClick={toggleCamera}
                style={{ width: '50px', height: '50px' }}
              >
                {isCameraOn ? <Camera size={20} /> : <CameraOff size={20} />}
              </Button>
              <Button 
                variant={isScreenSharing ? 'primary' : 'secondary'} 
                className="rounded-circle p-3"
                onClick={toggleScreenShare}
                style={{ width: '50px', height: '50px' }}
              >
                <ScreenShare size={20} />
              </Button>
              <Button 
                variant={isHandRaised ? 'warning' : 'secondary'} 
                className="rounded-circle p-3"
                onClick={toggleHandRaise}
                style={{ width: '50px', height: '50px' }}
              >
                <Hand size={20} />
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-circle p-3"
                onClick={toggleChat}
                style={{ width: '50px', height: '50px' }}
              >
                <MessageSquare size={20} />
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-circle p-3"
                onClick={toggleParticipants}
                style={{ width: '50px', height: '50px' }}
              >
                <Users size={20} />
              </Button>
              <Button 
                variant="secondary" 
                className="rounded-circle p-3"
                onClick={toggleFullscreen}
                style={{ width: '50px', height: '50px' }}
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </Button>
              <Button 
                variant="danger" 
                className="rounded-circle p-3"
                onClick={() => onNavigate('dashboard')}
                style={{ width: '50px', height: '50px' }}
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        {(isChatOpen || isParticipantsOpen) && (
          <div className="bg-white" style={{ width: '300px' }}>
            <div className="border-bottom">
              <div className="nav nav-tabs">
                <button 
                  className={`nav-link ${activeTab === 'chat' ? 'active' : ''}`}
                  onClick={() => setActiveTab('chat')}
                >
                  <MessageSquare size={16} className="me-1" />
                  Chat
                </button>
                <button 
                  className={`nav-link ${activeTab === 'participants' ? 'active' : ''}`}
                  onClick={() => setActiveTab('participants')}
                >
                  <Users size={16} className="me-1" />
                  Participants ({participants.length})
                </button>
              </div>
            </div>

            {activeTab === 'chat' && (
              <div className="d-flex flex-column h-100">
                <div className="flex-fill overflow-auto p-3" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                  {chatMessages.map((message) => (
                    <div key={message.id} className="mb-3">
                      <div className="d-flex align-items-start gap-2">
                        <img 
                          src={message.avatar} 
                          alt={message.sender} 
                          className="rounded-circle"
                          style={{ width: '32px', height: '32px' }}
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <span className="fw-medium text-deep-red">{message.sender}</span>
                            {message.isHost && (
                              <span className="badge bg-primary-red text-white small">Host</span>
                            )}
                          </div>
                          <p className="text-muted small mb-1">{message.message}</p>
                          <span className="text-muted" style={{ fontSize: '0.7rem' }}>{message.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-top">
                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <Button onClick={sendMessage}>
                      <Send size={16} />
                    </Button>
                  </div>
                  <div className="d-flex gap-2 mt-2">
                    <Button size="sm" variant="secondary" className="p-1">
                      <Image size={14} />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-1">
                      <FileText size={14} />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-1">
                      <Link size={14} />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-1">
                      <Smile size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'participants' && (
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold text-deep-red mb-0">Participants</h6>
                  <Button size="sm" variant="secondary">
                    <UserPlus size={14} className="me-1" />
                    Invite
                  </Button>
                </div>
                <div className="d-flex flex-column gap-2" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
                  {participants.map((participant) => (
                    <div key={participant.id} className="d-flex align-items-center justify-content-between p-2 border rounded-3">
                      <div className="d-flex align-items-center gap-2">
                        <img 
                          src={participant.avatar} 
                          alt={participant.name} 
                          className="rounded-circle"
                          style={{ width: '32px', height: '32px' }}
                        />
                        <div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="fw-medium text-deep-red">{participant.name}</span>
                            {participant.role === 'Host' && (
                              <span className="badge bg-primary-red text-white small">Host</span>
                            )}
                          </div>
                          <span className="text-muted" style={{ fontSize: '0.7rem' }}>{participant.role}</span>
                        </div>
                      </div>
                      <div className="d-flex gap-1">
                        {participant.isHandRaised && (
                          <span className="badge bg-warning text-dark">
                            <Hand size={12} />
                          </span>
                        )}
                        {!participant.isMicOn && (
                          <span className="badge bg-danger">
                            <MicOff size={12} />
                          </span>
                        )}
                        {!participant.isCameraOn && (
                          <span className="badge bg-danger">
                            <CameraOff size={12} />
                          </span>
                        )}
                        <Button size="sm" variant="secondary" className="p-1">
                          <MoreVertical size={12} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
          <div className="bg-white rounded-3 p-4" style={{ width: '400px' }}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="fw-bold text-deep-red mb-0">Settings</h5>
              <Button variant="secondary" onClick={() => setIsSettingsOpen(false)}>
                <X size={16} />
              </Button>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium text-deep-red">Audio Input</label>
              <select className="form-select">
                <option>Default Microphone</option>
                <option>External Microphone</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium text-deep-red">Audio Output</label>
              <select className="form-select">
                <option>Default Speakers</option>
                <option>Headphones</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium text-deep-red">Video Input</label>
              <select className="form-select">
                <option>Default Camera</option>
                <option>External Camera</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium text-deep-red">Video Quality</label>
              <select className="form-select">
                <option>High Definition (HD)</option>
                <option>Standard Definition (SD)</option>
                <option>Low</option>
              </select>
            </div>
            <Button className="w-100">Save Settings</Button>
          </div>
        </div>
      )}
    </div>
  );
}