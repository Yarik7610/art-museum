import React from "react"

interface Props {
  children: React.ReactNode
}

interface ErrorState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends React.Component<Props, ErrorState> {
  public state: ErrorState = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError() {
    return { hasError: true }
  }

  public componentDidCatch(error: Error) {
    this.setState({ error })
  }

  render() {
    if (this.state.hasError) return <p className="middle-message error-message">{this.state.error?.message}</p>
    return this.props.children
  }
}
export default ErrorBoundary
