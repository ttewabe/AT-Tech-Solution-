-- Connect to the target database
\c at_tech_db

-- Create the 'contact_submission' table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'users' table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'payments' table if it doesn't exist
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    amount numeric(10,2) NOT NULL,
    payment_status VARCHAR(50) NOT NULL,
    payment_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create the 'authors' table if it doesn't exist
CREATE TABLE IF NOT EXISTS authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    bio TEXT NOT NULL,
    profile_picture bytea,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'blog_posts' table if it doesn't exist
CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id INT NOT NULL,
    publish_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(100) NOT NULL,
    tags VARCHAR(100) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

-- Create the 'comments' table if it doesn't exist
CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    comment_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    parrent_comment_id INT,
    FOREIGN KEY (post_id) REFERENCES blog_posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (parrent_comment_id) REFERENCES comments(id)
);

-- Create the 'votes' table if it doesn't exist
CREATE TABLE IF NOT EXISTS votes (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    comment_id INT NOT NULL,
    vote_type VARCHAR(50) NOT NULL,
    vote_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES blog_posts(id),
    FOREIGN KEY (comment_id) REFERENCES comments(id)
);

-- Create readonly and readwrite roles with passwords from environment variables
CREATE ROLE readonly_user WITH LOGIN PASSWORD '${READONLY_PASSWORD}';
CREATE ROLE readwrite_user WITH LOGIN PASSWORD '${READWRITE_PASSWORD}';

-- Grant permissions to the roles
GRANT CONNECT ON DATABASE your_database_name TO readonly_user, readwrite_user;
GRANT USAGE ON SCHEMA public TO readonly_user, readwrite_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO readwrite_user;

-- Ensure future tables have the same permissions
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO readwrite_user;
