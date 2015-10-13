class Factorial
  def self.recursive_factorial(n, accumulator = 1)
    n <= 1 ? accumulator : recursive_factorial(n - 1, accumulator * n)
  end

  def self.tail_call_optimize!
    require "tco_method"
    extend TCOMethod::Mixin
    tco_module_method(:recursive_factorial)
  end
end

Factorial.tail_call_optimize!
puts Factorial.recursive_factorial(9000)
