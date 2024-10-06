import React from "react"

interface Props {
  children: React.ReactNode
}
interface ErrorState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, ErrorState> {
  public state: ErrorState = {
    hasError: false
  }

  public static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return <p className="middle-message">Sorry, some error occured</p>
    return this.props.children
  }
}
export default ErrorBoundary
