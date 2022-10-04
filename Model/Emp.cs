using System;
using System.Collections.Generic;

namespace ReactProject.Model
{
    public partial class Emp
    {
        public Emp()
        {
            Projs = new HashSet<Proj>();
        }

        public int Empno { get; set; }
        public string Ename { get; set; } = null!;
        public string Job { get; set; } = null!;
        public int? Mgr { get; set; }
        public DateTime Hiredate { get; set; }
        public int Sal { get; set; }
        public int? Comm { get; set; }
        public int Deptno { get; set; }

        public virtual Dept DeptnoNavigation { get; set; } = null!;
        public virtual ICollection<Proj> Projs { get; set; }
    }
}
