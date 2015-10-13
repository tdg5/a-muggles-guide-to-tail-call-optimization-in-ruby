- Define recursion
- Define tail calls
- Concise definition of tail call optimization

- Why TCO?
  - Ruby is a multi-paradigm language
  - Enables a wider ranger of functional solutions
    - Tail recursion
      - Trees!
      - More trees
      - Graphs
      - Lists
  - Enables better abstractions in OO contexts

- Introduction to the stack
- Tail call elimination
- Why not TCO?
  - lost segments of backtrace
  - lost set_trace_func helper
  - Takes some work to use right now
  - Doesn't work for blocks?
- Helpers for making TCO more user friendly.
  - tco_method
- Opportunities for applying TCO
  - Hamster
  - Rack maybe?

- Additional resources
  - RUM
  - Magnus Holm?


- Opportunities for Harry Potter references
  -

- Graphics
  - gif depciting how current stack frame is swapped out in place
  - gif depiciting how tail recursion is different from normal recursion
    - Maybe something like infinite recurrance in a mirror vs. Patrick Star
    recursion

- How much Ruby VM detail to go into? At least a little, don't forget sparking
curiousity is a goal of the talk.
