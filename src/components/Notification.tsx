import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface NotificationState {
    type: AlertType;
    message: string;
    duration?: number;
    open: boolean;
}

interface NotificationContextProps {
    notification: NotificationState | null;
    showNotification: (type: AlertType, message: string, duration?: number) => void;
    hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

// Darker background colors
const backgroundColors: Record<AlertType, string> = {
    success: '#43a047',
    error: '#e53935',
    warning: '#fbc02d',
    info: '#1e88e5',
};

const textColors: Record<AlertType, string> = {
    success: '#fff',
    error: '#fff',
    warning: '#212121',
    info: '#fff',
};

type AnimationState = 'entering' | 'entered' | 'exiting' | 'exited';

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [notification, setNotification] = useState<NotificationState | null>(null);
    const [animationState, setAnimationState] = useState<AnimationState>('exited');

    useEffect(() => {
        if (notification && notification.open) {
            setAnimationState('entering');
            const enterTimeout = setTimeout(() => setAnimationState('entered'), 10);

            let timer: NodeJS.Timeout | undefined;
            if (notification.duration) {
                timer = setTimeout(() => {
                    setAnimationState('exiting');
                    setTimeout(() => {
                        setNotification(null);
                        setAnimationState('exited');
                    }, 300);
                }, notification.duration);
            }
            return () => {
                clearTimeout(enterTimeout);
                if (timer) clearTimeout(timer);
            };
        } else {
            setAnimationState('exiting');
            const exitTimeout = setTimeout(() => {
                setNotification(null);
                setAnimationState('exited');
            }, 300);
            return () => clearTimeout(exitTimeout);
        }
    }, [notification]);

    const showNotification = (type: AlertType, message: string, duration = 3000) => {
        setNotification({ type, message, duration, open: true });
    };

    const hideNotification = () => {
        setAnimationState('exiting');
        setTimeout(() => {
            setNotification(null);
            setAnimationState('exited');
        }, 300);
    };

    const getTransform = () => {
        switch (animationState) {
            case 'entering':
                return 'translateX(120%)';
            case 'entered':
                return 'translateX(0)';
            case 'exiting':
                return 'translateX(120%)';
            default:
                return 'translateX(120%)';
        }
    };

    const getOpacity = () => (animationState === 'entered' ? 1 : 0);

    return (
        <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
            {children}
            {notification && (
                <div
                    style={{
                        position: 'fixed',
                        top: 20,
                        right: 40,
                        padding: '16px 24px',
                        background: backgroundColors[notification.type],
                        color: textColors[notification.type],
                        borderRadius: 8,
                        zIndex: 9999,
                        minWidth: 220,
                        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 500,
                        fontSize: 16,
                        transform: getTransform(),
                        opacity: getOpacity(),
                        transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s cubic-bezier(.4,0,.2,1)',
                    }}
                >
                    <span style={{ flex: 1 }}>{notification.message}</span>
                    {/* <button
                        style={{
                            marginLeft: 16,
                            background: 'transparent',
                            border: 'none',
                            color: textColors[notification.type],
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: 20,
                            lineHeight: 1,
                        }}
                        onClick={hideNotification}
                        aria-label="Close notification"
                    >
                        ×
                    </button> */}
                </div>
            )}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) throw new Error('useNotification must be used within NotificationProvider');
    return context;
};
