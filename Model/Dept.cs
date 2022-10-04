using System;
using System.Collections.Generic;

namespace ReactProject.Model
{
    public partial class Dept
    {
        public Dept()
        {
            Emps = new HashSet<Emp>();
        }

        public int Deptno { get; set; }
        public decimal DepId { get; set; }
        public string Dname { get; set; } = null!;
        public string Loc { get; set; } = null!;

        public virtual ICollection<Emp> Emps { get; set; }
    }
}
