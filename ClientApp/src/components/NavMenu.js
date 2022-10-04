import React, { useState } from "react";
import { toggleButton } from "..";
import Home from "./Home";
import Employees from "./Employees";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Projects from "./Projects";
export default function NavMenu(props) {
  const [search, setSearch] = useState("");

  return (
    <>
      <header>
        <nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
          {/*<!-- Navbar Brand-->*/}
          <a className='navbar-brand ps-3' href='/employee'>
            Company Dashboard
          </a>
          {/*   <!-- Sidebar Toggle-->*/}
          <button
            className='btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0'
            id='sidebarToggle'
            href='#!'
            onClick={toggleButton}
          >
            <i className='fas fa-bars'></i>
          </button>
          {/*   <!-- Navbar Search-->*/}
          <form className='d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0'>
            <div className='input-group'>
              <input
                className='form-control'
                type='text'
                placeholder='Search for...'
                aria-label='Search for...'
                aria-describedby='btnNavbarSearch'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className='btn btn-primary'
                id='btnNavbarSearch'
                type='button'
              >
                <i className='fas fa-search'></i>
              </button>
            </div>
          </form>
          {/* <!-- Navbar-->*/}
          {/* <ul className='navbar-nav ms-auto ms-md-0 me-3 me-lg-4'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fas fa-user fa-fw'></i>
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <a className='dropdown-item' href='#!'>
                    Settings
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#!'>
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#!'>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul> */}
        </nav>
      </header>
      <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
          <nav
            className='sb-sidenav accordion sb-sidenav-dark'
            id='sidenavAccordion'
          >
            <div className='sb-sidenav-menu'>
              <div className='nav'>
                <div className='sb-sidenav-menu-heading'>Core</div>
                <a className='nav-link' href='/employee'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-tachometer-alt'></i>
                  </div>
                  Dashboard
                </a>
                <div className='sb-sidenav-menu-heading'>Table</div>

                <Link to='employee' style={{ textDecoration: "none" }}>
                  <div
                    className='nav-link collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapsePages'
                    aria-expanded='false'
                    aria-controls='collapsePages'
                  >
                    <div className='sb-nav-link-icon'>
                      <i className='fas fa-book-open'></i>
                    </div>
                    Employees
                    <div className='sb-sidenav-collapse-arrow'>
                      <i className='fas fa-angle-down'></i>
                    </div>
                  </div>
                </Link>

                <div
                  className='collapse'
                  id='collapseLayouts'
                  aria-labelledby='headingOne'
                  data-bs-parent='#sidenavAccordion'
                >
                  <nav className='sb-sidenav-menu-nested nav'>
                    <a className='nav-link' href='layout-static.html'>
                      Static Navigation
                    </a>
                    <a className='nav-link' href='layout-sidenav-light.html'>
                      Light Sidenav
                    </a>
                  </nav>
                </div>
                <Link to='/' style={{ textDecoration: "none" }}>
                  <div
                    className='nav-link collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseLayouts'
                    aria-expanded='false'
                    aria-controls='collapseLayouts'
                  >
                    <div className='sb-nav-link-icon'>
                      <i className='fas fa-columns'></i>
                    </div>
                    Departments
                    <div className='sb-sidenav-collapse-arrow'>
                      <i className='fas fa-angle-down'></i>
                    </div>
                  </div>
                </Link>

                {/* <Link to='projects' style={{ textDecoration: "none" }}>
                  <div
                    className='nav-link collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapsePages'
                    aria-expanded='false'
                    aria-controls='collapsePages'
                  >
                    <div className='sb-nav-link-icon'>
                      <i className='fas fa-book-open'></i>
                    </div>
                    Projects
                    <div className='sb-sidenav-collapse-arrow'>
                      <i className='fas fa-angle-down'></i>
                    </div>
                  </div>
                </Link> */}
                <div
                  className='collapse'
                  id='collapsePages'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#sidenavAccordion'
                >
                  <nav
                    className='sb-sidenav-menu-nested nav accordion'
                    id='sidenavAccordionPages'
                  >
                    <a
                      className='nav-link collapsed'
                      href='#'
                      data-bs-toggle='collapse'
                      data-bs-target='#pagesCollapseAuth'
                      aria-expanded='false'
                      aria-controls='pagesCollapseAuth'
                    >
                      Authentication
                      <div className='sb-sidenav-collapse-arrow'>
                        <i className='fas fa-angle-down'></i>
                      </div>
                    </a>
                    <div
                      className='collapse'
                      id='pagesCollapseAuth'
                      aria-labelledby='headingOne'
                      data-bs-parent='#sidenavAccordionPages'
                    >
                      <nav className='sb-sidenav-menu-nested nav'>
                        <a className='nav-link' href='login.html'>
                          Login
                        </a>
                        <a className='nav-link' href='register.html'>
                          Register
                        </a>
                        <a className='nav-link' href='password.html'>
                          Forgot Password
                        </a>
                      </nav>
                    </div>
                    <a
                      className='nav-link collapsed'
                      href='#'
                      data-bs-toggle='collapse'
                      data-bs-target='#pagesCollapseError'
                      aria-expanded='false'
                      aria-controls='pagesCollapseError'
                    >
                      Error
                      <div className='sb-sidenav-collapse-arrow'>
                        <i className='fas fa-angle-down'></i>
                      </div>
                    </a>
                    <div
                      className='collapse'
                      id='pagesCollapseError'
                      aria-labelledby='headingOne'
                      data-bs-parent='#sidenavAccordionPages'
                    >
                      <nav className='sb-sidenav-menu-nested nav'>
                        <a className='nav-link' href='401.html'>
                          401 Page
                        </a>
                        <a className='nav-link' href='404.html'>
                          404 Page
                        </a>
                        <a className='nav-link' href='500.html'>
                          500 Page
                        </a>
                      </nav>
                    </div>
                  </nav>
                </div>
                {/* <div className='sb-sidenav-menu-heading'>Addons</div> */}
                {/* <a className='nav-link' href='charts.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-chart-area'></i>
                  </div>
                  Charts
                </a>
                <a className='nav-link' href='tables.html'>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-table'></i>
                  </div>
                  Tables
                </a> */}
              </div>
            </div>
            {/* <div className='sb-sidenav-footer'>
              <div className='small'>Logged in as:</div>
              Start Bootstrap
            </div> */}
          </nav>
        </div>
        <div id='layoutSidenav_content'>
          <main>
            <div class='container-fluid px-4'>
              <Routes>
                <Route path='/' element={<Home searchNav={search} />} />
                <Route
                  path='employee'
                  element={<Employees searchNav={search} />}
                />
                <Route path='projects' element={<Projects />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
