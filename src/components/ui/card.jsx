const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
)) 