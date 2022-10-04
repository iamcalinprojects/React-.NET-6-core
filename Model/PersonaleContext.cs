using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ReactProject.Model
{
    public partial class PersonaleContext : DbContext
    {
        public PersonaleContext()
        {
        }

        public PersonaleContext(DbContextOptions<PersonaleContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Datatype> Datatypes { get; set; } = null!;
        public virtual DbSet<Dept> Depts { get; set; } = null!;
        public virtual DbSet<Emp> Emps { get; set; } = null!;
        public virtual DbSet<Manager> Managers { get; set; } = null!;
        public virtual DbSet<Materialized> Materializeds { get; set; } = null!;
        public virtual DbSet<Proj> Projs { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("workstation id=PersonaleProj.mssql.somee.com;packet size=4096;user id=kevs_SQLLogin_1;pwd=s5kg5a9v1t;data source=PersonaleProj.mssql.somee.com;persist security info=False;initial catalog=PersonaleProj");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Datatype>(entity =>
            {
                entity.HasKey(e => e.Int)
                    .HasName("PK__datatype__8D35A509F7E0724D");

                entity.ToTable("datatypes");

                entity.Property(e => e.Int)
                    .HasColumnName("INT_")
                    .HasDefaultValueSql("((2312))");

                entity.Property(e => e.BigInt).HasColumnName("BIG_INT");

                entity.Property(e => e.Binary)
                    .HasMaxLength(50)
                    .HasColumnName("BINARY_")
                    .IsFixedLength();

                entity.Property(e => e.Bit)
                    .HasColumnName("BIT_")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Char)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("CHAR_")
                    .HasDefaultValueSql("('D')")
                    .IsFixedLength();

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("DATE_");

                entity.Property(e => e.Datetime)
                    .HasColumnType("datetime")
                    .HasColumnName("DATETIME_");

                entity.Property(e => e.Datetime2)
                    .HasColumnName("DATETIME2_")
                    .HasDefaultValueSql("('2012-03-04')");

                entity.Property(e => e.DatetimeOff).HasColumnName("DATETIME_OFF");

                entity.Property(e => e.Decimal)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("DECIMAL_");

                entity.Property(e => e.Float)
                    .HasColumnName("FLOAT_")
                    .HasDefaultValueSql("((444.44))");

                entity.Property(e => e.Image)
                    .HasColumnType("image")
                    .HasColumnName("IMAGE_");

                entity.Property(e => e.Money)
                    .HasColumnType("money")
                    .HasColumnName("MONEY_")
                    .HasDefaultValueSql("((22.33))");

                entity.Property(e => e.Nchar)
                    .HasMaxLength(10)
                    .HasColumnName("NCHAR_")
                    .HasDefaultValueSql("(N'D')")
                    .IsFixedLength();

                entity.Property(e => e.Ntext)
                    .HasColumnType("ntext")
                    .HasColumnName("NTEXT_");

                entity.Property(e => e.Numeric)
                    .HasColumnType("numeric(18, 2)")
                    .HasColumnName("NUMERIC_")
                    .HasDefaultValueSql("((234234))");

                entity.Property(e => e.Nvarchar)
                    .HasMaxLength(50)
                    .HasColumnName("NVARCHAR_")
                    .HasDefaultValueSql("(N'ASDASD')");

                entity.Property(e => e.NvarcharMax).HasColumnName("NVARCHAR_MAX");

                entity.Property(e => e.Real).HasColumnName("REAL_");

                entity.Property(e => e.SmallDt)
                    .HasColumnType("smalldatetime")
                    .HasColumnName("SMALL_DT");

                entity.Property(e => e.SmallInt)
                    .HasColumnName("SMALL_INT")
                    .HasDefaultValueSql("((232))");

                entity.Property(e => e.SmallMoney)
                    .HasColumnType("smallmoney")
                    .HasColumnName("SMALL_MONEY")
                    .HasDefaultValueSql("((11.23))");

                entity.Property(e => e.SqlVar)
                    .HasColumnType("sql_variant")
                    .HasColumnName("SQL_VAR");

                entity.Property(e => e.Text)
                    .HasColumnType("text")
                    .HasColumnName("TEXT_");

                entity.Property(e => e.Time).HasColumnName("TIME_");

                entity.Property(e => e.Timestamp)
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("TIMESTAMP_");

                entity.Property(e => e.TinyInt)
                    .HasColumnName("TINY_INT")
                    .HasDefaultValueSql("((3))");

                entity.Property(e => e.Uid).HasColumnName("UID_");

                entity.Property(e => e.VarChar)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("VAR_CHAR")
                    .HasDefaultValueSql("('zxcxcvxvcxvxv')");

                entity.Property(e => e.VarCharMax)
                    .IsUnicode(false)
                    .HasColumnName("VAR_CHAR_MAX");

                entity.Property(e => e.Varbin)
                    .HasMaxLength(50)
                    .HasColumnName("VARBIN");

                entity.Property(e => e.VarbinMax).HasColumnName("VARBIN_MAX");

                entity.Property(e => e.Xml)
                    .HasColumnType("xml")
                    .HasColumnName("XML_");
            });

            modelBuilder.Entity<Dept>(entity =>
            {
                entity.HasKey(e => e.Deptno)
                    .HasName("PK__dept__E0EB08D7BDCF1E12");

                entity.ToTable("dept");

                entity.Property(e => e.Deptno)
                    .ValueGeneratedNever()
                    .HasColumnName("DEPTNO");

                entity.Property(e => e.DepId)
                    .HasColumnType("numeric(18, 0)")
                    .ValueGeneratedOnAdd()
                    .HasColumnName("DEP_ID");

                entity.Property(e => e.Dname)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("DNAME");

                entity.Property(e => e.Loc)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("LOC");
            });

            modelBuilder.Entity<Emp>(entity =>
            {
                entity.HasKey(e => e.Empno)
                    .HasName("PK__emp__14CCF2EEA72D2CC5");

                entity.ToTable("emp");

                entity.Property(e => e.Empno)
                    .ValueGeneratedNever()
                    .HasColumnName("EMPNO");

                entity.Property(e => e.Comm).HasColumnName("COMM");

                entity.Property(e => e.Deptno).HasColumnName("DEPTNO");

                entity.Property(e => e.Ename)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ENAME");

                entity.Property(e => e.Hiredate)
                    .HasColumnType("date")
                    .HasColumnName("HIREDATE");

                entity.Property(e => e.Job)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("JOB");

                entity.Property(e => e.Mgr).HasColumnName("MGR");

                entity.Property(e => e.Sal).HasColumnName("SAL");

                entity.HasOne(d => d.DeptnoNavigation)
                    .WithMany(p => p.Emps)
                    .HasForeignKey(d => d.Deptno)
                    .HasConstraintName("fk_DEPTNO");
            });

            modelBuilder.Entity<Manager>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Managers");

                entity.Property(e => e.Employee)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Manager1)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("Manager");
            });

            modelBuilder.Entity<Materialized>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Materialized");

                entity.Property(e => e.Manager)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Proj>(entity =>
            {
                entity.ToTable("proj");

                entity.Property(e => e.Projid)
                    .ValueGeneratedNever()
                    .HasColumnName("PROJID");

                entity.Property(e => e.Empno).HasColumnName("EMPNO");

                entity.Property(e => e.Enddate)
                    .HasColumnType("date")
                    .HasColumnName("ENDDATE");

                entity.Property(e => e.Startdate)
                    .HasColumnType("date")
                    .HasColumnName("STARTDATE");

                entity.HasOne(d => d.EmpnoNavigation)
                    .WithMany(p => p.Projs)
                    .HasForeignKey(d => d.Empno)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_PROJ");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
