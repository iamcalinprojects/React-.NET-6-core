using System;
using System.Collections.Generic;

namespace ReactProject.Model
{
    public partial class Proj
    {
        public int Projid { get; set; }
        public int Empno { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }

        public virtual Emp EmpnoNavigation { get; set; } = null!;
    }
}
